import React, { Component } from 'react'
import Web3 from 'web3'
import RyuNFT from '../abis/RyuNFT.json'
import DaiToken from '../abis/DaiToken.json'
import logo from '../pictures/ryu.jpeg'

class Ryu extends Component 
{
  intervalID;

  async componentWillMount() 
  {
    await this.loadWeb3()
    
    if (window.web3!==undefined)
    {
        await this.loadBlockchainData()
        this.intervalID = setInterval(this.loadBlockchainData.bind(this), 5000);
    }
  }
  
  componentWillUnmount() 
  {
    clearInterval(this.intervalID);
  }
  
  async loadBlockchainData() 
  {
    const polygonNetworkId = 137
    const ryuNFTAddress = "0x636B36e405CAF5799463A9B3694E0597Ee11f439"
	const daiTokenAddress = "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063"

	const mintPrice = 0.1 //DAI
	const mintPriceFixed = parseInt(window.web3.utils.toWei(mintPrice.toString()))

	const maxMintAmount = 1000 //NFTs
    this.setState({maxMintAmount})		
	
    const minimumDaiAllowance = mintPriceFixed * maxMintAmount
    this.setState({minimumDaiAllowance})      
  
    const web3 = window.web3
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})   
    
    const networkId = await web3.eth.net.getId()
    
    if (networkId===polygonNetworkId) 
    {  
      // Load Ryu NFT
      const ryuNFT = new web3.eth.Contract(RyuNFT.abi, ryuNFTAddress)
      this.setState({ryuNFT})
          
      const ryuBalance = await ryuNFT.methods.balanceOf(this.state.account).call()
      this.setState({ryuBalance})
      
      const blocksStaking = await ryuNFT.methods.computeBlocksStaking().call({from: this.state.account})
      this.setState({blocksStaking})
      
      let userReward = '0'
      
      if (ryuBalance > 0)
          userReward = await ryuNFT.methods.computeUserReward().call({from: this.state.account})

      this.setState({userReward})
      
      const fixedReward = parseFloat(window.web3.utils.fromWei(userReward)).toFixed(5)
      this.setState({fixedReward})
 
      const rewardsFund = await ryuNFT.methods.getRewardsFund().call()
      this.setState({rewardsFund})
      
      const fixedRewardsFund = parseFloat(window.web3.utils.fromWei(rewardsFund)).toFixed(5)
      this.setState({fixedRewardsFund})
      
      const totalSupply = await ryuNFT.methods.getTotalSupply().call()
      this.setState({totalSupply})
      
      const harvestCooldownBlocks = await ryuNFT.methods.getHarvestCooldownBlocks().call()
      this.setState({harvestCooldownBlocks})
      
      const stakingBlockRange = await ryuNFT.methods.getStakingBlockRange().call()
      this.setState({stakingBlockRange})

      let auxStakingPower = (blocksStaking / stakingBlockRange) * 100
      
      if (auxStakingPower > 100)
          auxStakingPower = 100
            
      const stakingPower = auxStakingPower.toFixed(2)      
            
      this.setState({stakingPower})
      
      const APR = parseFloat(rewardsFund / window.web3.utils.toWei(totalSupply)).toFixed(5)
      this.setState({APR})
      
	  // Load DAI Token  
	  const daiToken = new web3.eth.Contract(DaiToken.abi, daiTokenAddress)
      this.setState({daiToken})   	      
      
      const daiBalance = await daiToken.methods.balanceOf(this.state.account).call()
      this.setState({daiBalance})      

      const daiFixedBalance = parseFloat(window.web3.utils.fromWei(daiBalance)).toFixed(2)
      this.setState({daiFixedBalance})      
      
      const daiAllowance = await daiToken.methods.allowance(this.state.account, ryuNFTAddress).call()
      this.setState({daiAllowance})
    }
    else 
    {
      window.alert('Ryū NFT contract not deployed on your current network.')
    }
  }

  async loadWeb3() 
  {
    if (window.ethereum) 
    {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) 
    {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else 
    {
      window.alert('Your web browser is not ready to connect to the blockchain. You could consider trying MetaMask or using the web browser built into your wallet.')
    }
  }

  approve = () => 
  {	
    this.state.daiToken.methods.approve(this.state.ryuNFT._address, this.state.minimumDaiAllowance.toString()).send({from: this.state.account})
  }

  mint = (amount) => 
  {
    if ((this.state.userReward > 0) &&
        (parseInt(this.state.blocksStaking) > parseInt(this.state.harvestCooldownBlocks)))
        
        window.alert('Minting more NFTs will reset your staking power. Harvest your pending rewards first or you will lose them.')
    else
        this.state.ryuNFT.methods.mintBatch(amount).send({from: this.state.account})
  }
  
  harvest = () => 
  {
    this.state.ryuNFT.methods.harvest().send({from: this.state.account})
  }
  
  constructor(props) 
  {
    super(props)
    
    this.state = 
    {
      account: '0x0',
      ryuNFT: {},
      daiToken: {},
      ryuBalance: '0',
      totalSupply: '1',      
      blocksStaking: '0',
      userReward: '0',
      fixedReward: '0',
      rewardsFund: '0',
      fixedRewardsFund: '0',
      harvestCooldownBlocks: '0',
      stakingBlockRange: '0',
      stakingPower: '0',
      APR: '0',
	  daiFixedBalance: '0',
      daiAllowance: '0',	  
	  minimumDaiAllowance: '0',
	  maxMintAmount: '0'
    }
  }

  render() 
  {
    const userStats = (
              <table align="center">
                <tbody>
                  <tr>
                    <td>Ryū balance: </td>
                    <td>{this.state.ryuBalance}</td>
                  </tr>
                  <tr>
                    <td>Blocks staking: </td>
                    <td>{this.state.blocksStaking}</td>
                  </tr>
                  <tr>
                    <td>Staking power: </td>
                    <td>{this.state.stakingPower} %</td>
                  </tr>
                  <tr>
                    <td>Harvest lockup: </td>
                    <td>1 day</td>
                  </tr>
                  <tr>
                    <td>Rewards fund: </td>
                    <td>{this.state.fixedRewardsFund} MANA</td>
                  </tr>
                  <tr>
                    <td>Ryū total supply: &nbsp;&nbsp;</td>
                    <td>{this.state.totalSupply}</td>
                  </tr>
                  <tr>
                    <td>Ryū max supply: </td>
                    <td>1 billion</td>
                  </tr>  
                  <tr>
                    <td>Ryū mint price: </td>
                    <td>0.1 DAI</td>
                  </tr>   
                  <tr>
                    <td>DAI balance: </td>
                    <td>{this.state.daiFixedBalance} DAI</td>
                  </tr>                                                      
                  <tr>
                    <td>APR per NFT: </td>
                    <td>{this.state.APR} MANA</td>
                  </tr>
                </tbody>
            </table>)
    
    const approveButton = (
              <form onSubmit={(event) => {
                    event.preventDefault()
                    this.approve()}}>
                    
                  <div className="d-grid gap-2">
                    <input type="text" 
                           maxLength = "25" 
                           size = '12' 
                           className='form-control'
                           ref={(input) => {this.input = input}}
                           placeholder = '0'
                           required />
                                 
                    <button type="submit" className="btn btn-lg btn-primary">Approve</button>
                  </div>
                </form>)
    
    const mintButton = (
                <form onSubmit={(event) => {
                    event.preventDefault()
                    
                    if ((!isNaN(this.input.value)) && 
                        (parseInt(this.input.value) > 0) && 
                        (parseInt(this.input.value) <= this.state.maxMintAmount))
                    {
                      const amount = parseInt(this.input.value)
                      this.mint(amount)
                    }}}>
                    
                  <div className="d-grid gap-2">
                    <input type="text" 
                                 maxLength = "25" 
                                 className='form-control'
                                 ref={(input) => {this.input = input}}
                                 placeholder = '0'
                                 required />
                    
                    <button type="submit" className="btn btn-lg btn-primary">Mint</button>
                  </div>
                </form>)
    
    const harvestButton = (<button 
                              type="submit"
                              className="btn btn-lg btn-primary"
                              onClick={(event) => {
                                event.preventDefault()
                                this.harvest()}}>
                                
                              Harvest
                           </button>)
                           
    const disabledHarvestButton = (
                            <button 
                              type="submit"
                              className="btn btn-lg btn-outline-secondary disabled">
                              
                              Harvest
                           </button>)
    
    const title = (
            <div className="row">
              <div className="col-sm">
    	        <br /><p />	
		        <br /><p />
		        <center><img src={logo} height="140" alt="Logo"/></center>
        		<br /><p />
        		<br /><p />
        	  </div>
        	</div>)
        	
    let mintSection = approveButton
    let harvestSection = harvestButton
    let returnValue

    //Check mint section
    if (parseInt(this.state.daiAllowance) >= this.state.minimumDaiAllowance)
        mintSection = mintButton;
    
    //Check harvest section
    if (parseInt(this.state.blocksStaking) <= parseInt(this.state.harvestCooldownBlocks))
        harvestSection = disabledHarvestButton
        	
    const userMenu = (
            <div className="row">
              <div className="col-sm-3">
              </div>
              <div className="col-sm">
                <div className="deposit_column"></div>
                {mintSection}
                <br /><p />
              </div>
              <div className="col-sm">
                <div className="d-grid gap-2">
                  <p className="centered_text">Rewards: {this.state.fixedReward}</p>
                  {harvestSection}
                </div>
                <br /><p />
              </div>
              <div className="col-sm-3">
              </div>
            </div>)
            
    //Compute the web page
    if (window.web3!==undefined)
    {
        returnValue = (
    	   <div className="container">
    	     {title}
             {userStats}
             <br /><p />
             <br /><p />            
             {userMenu}    
             <br /><p />
             <br /><p />
             <br /><p />
           </div>)
     }   
     else
     {
        returnValue = (
    	   <div className="container">
		      {title}
		      {userStats}
		      <br /><p />
		      <br /><p />
		      <br /><p />    
           </div>);  
     }  
     
     return returnValue;
   }
}

export default Ryu;
