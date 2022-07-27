import React, { Component } from 'react'
import Web3 from 'web3'
import GoToken from '../abis/GoToken.json'
import GoFarm from '../abis/GoFarm.json'
import MaticGoLP from '../abis/MaticGoLP.json'
import MaticDaiLP from '../abis/MaticDaiLP.json'
import rugdoc from '../pictures/rugdoc.png'

class Home extends Component 
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
    const web3 = window.web3
    const networkId = await web3.eth.net.getId()
    
    // Load GoToken
    const goTokenData = GoToken.networks[networkId]
    let goToken
    
    if (goTokenData) 
    {
      goToken = new web3.eth.Contract(GoToken.abi, goTokenData.address)
      
      const totalSupply = await goToken.methods.totalSupply().call()
      this.setState({totalSupply})
    } 
    else 
    {
      window.alert('Gō contract not deployed on your current network.')
    }

    // Load GoFarm
    const goFarmData = GoFarm.networks[networkId]
    let goFarm
    
    if(goFarmData && goToken) 
    {
      goFarm = new web3.eth.Contract(GoFarm.abi, goFarmData.address)
      
      const farmTreasury = await goFarm.methods.getFarmTreasury().call()
      this.setState({farmTreasury})
      
      const rewardsFund = await goFarm.methods.getRewardsFund().call()
      this.setState({rewardsFund})

      const totalFarmBalance = await goToken.methods.balanceOf(goFarmData.address).call()
      this.setState({totalFarmBalance})
      
      const totalGoStaked = await goFarm.methods.getTotalGoStaked().call()
      this.setState({totalGoStaked})
    }
    
    // Load MaticDaiLP    
    const polygonNetworkId = 137
    const maticDaiLpTokenAddress = "0xeef611894ceae652979c9d0dae1deb597790c6ee"
    
    if (networkId===polygonNetworkId) 
    {
	  const maticDaiLP = new web3.eth.Contract(MaticDaiLP.abi, maticDaiLpTokenAddress)  
      const maticDaiReserves = await maticDaiLP.methods.getReserves().call()
	  const maticReserves = maticDaiReserves[0]
	  const daiReserves = maticDaiReserves[1]
      const maticPriceUSD = daiReserves / maticReserves
      
      this.setState({maticPriceUSD})
    }

    // Load MaticGoLP    
    const maticGoLpTokenAddress = "0x42b3d44abb0697452aa7ca31106f716b62660b5a"
    
    if (networkId===polygonNetworkId) 
    {
	  const maticGoLP = new web3.eth.Contract(MaticGoLP.abi, maticGoLpTokenAddress)  
      const maticGoReserves = await maticGoLP.methods.getReserves().call()
	  const maticReserves = maticGoReserves[0]
	  const pGoReserves = maticGoReserves[1]
      const pGoPriceMatic = maticReserves / pGoReserves
      const pGoPriceUSD = pGoPriceMatic * this.state.maticPriceUSD
      const marketCap = pGoPriceUSD * window.web3.utils.fromWei(this.state.totalSupply)

      this.setState({pGoPriceUSD})
      this.setState({marketCap})
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

  constructor(props) 
  {
    super(props)
    
    this.state = 
    {
      totalSupply: '0',
      farmTreasury: '0',
      rewardsFund: '0',
      totalFarmBalance: '0',
      totalGoStaked: '0',
      maticPriceUSD: '0',
      pGoPriceUSD: '0',
      marketCap: '0'
    }
  } 
   
  render() 
  {
    const title = (
            <div className="row">
                <br /><p />	
                <br /><p />
                <br /><p />	
                <br /><p />		
              <div className="col-sm">
                <h3>Gō Finance</h3>
          		<br /><p />	
		        <p className="centered_text">Cooperative DeFi Farming</p>
          		<br /><p />
          		<center>
          		    <a href="https://rugdoc.io/project/go-finance-polygon/" target="blank">
              		    <img src={rugdoc} height="120" alt="Rugdoc"/>
              		</a>
          		</center>
          		<br /><p />
          		<br />
		      </div>
		    </div>)
	
    let returnValue;

    if (window.web3!==undefined)
    {
        returnValue = (
            <div className="container">
    	        {title}
        	    <div className="row">
        	       <div className="col-sm">
                      <center>
                        <table>
                          <tbody>
                            <tr>
                                <td>Total supply: </td>
                                <td>{window.web3.utils.fromWei(this.state.totalSupply)} pGō</td>
                            </tr>
                            <tr>
                                <td>Token price: </td>
                                <td>{parseFloat(this.state.pGoPriceUSD).toFixed(4)} $</td>
                            </tr>
                            <tr>
                                <td>Market Cap: </td>
                                <td>{parseInt(this.state.marketCap)} $</td>
                            </tr>
                            <tr>
                                <td>Treasury: </td>
                                <td>{parseInt(window.web3.utils.fromWei(this.state.farmTreasury))} pGō</td>
                            </tr>
                            <tr>
                                <td>Rewards fund: &nbsp;&nbsp;</td>
                                <td>{parseInt(window.web3.utils.fromWei(this.state.rewardsFund))} pGō</td>
                            </tr>
                            <tr>
                                <td>Total staked: </td>
                                <td>{parseInt(window.web3.utils.fromWei(this.state.totalGoStaked))} pGō</td>
                            </tr>
                            <tr>
                                <td>Farm balance: </td>
                                <td>{parseInt(window.web3.utils.fromWei(this.state.totalFarmBalance))} pGō</td>
                            </tr>
                          </tbody>
                        </table>
                    </center>
        		    <br /><p />	
        		    <br /><p />	
      		      </div>
	            </div>
	         </div>);     
     }   
     else
     {
        returnValue = (
           <div className="container">
              {title}
              <br /><p />	
		      <br /><p />
	       </div>);   
     }  
     
     return returnValue;
   }
}

export default Home;
