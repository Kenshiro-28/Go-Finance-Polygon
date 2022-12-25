import React, { Component } from 'react'

class About extends Component 
{
  render() 
  {
    const content = (
            <div className="row">
                <br /><p />	
                <br /><p />
                <br /><p />
                <br />
              <div className="col-sm">
                <p className="centered_text">----- Overview -----</p>
                <br />
          		<p>Gō Finance is a cooperative DeFi platform. To use the farms, users must contribute to the shared fund by paying deposit fees. Smart contracts use the shared fund to automatically execute custom strategies that generate rewards for all depositors.</p>
          		<p>The web interface is open source and anyone can download and run it locally on their computer. Smart contracts have no owner privileges and run an immutable set of rules. They are deployed on BSC, Polygon and Fantom.</p>
          		<p>Keep in mind that trading is a risky activity that can involve a loss of money. You should only invest the amount you can afford to lose.</p>
          		<br /><p />
          		<p className="centered_text">----- Tokenomics -----</p>
          		<br />
          		<p>pGō is a fully decentralized token that can be staked to earn rewards. There are performance fees on some strategies that buy pGō from the market, which helps increase its price. The name comes from the gō (合) or cup, which is a traditional Japanese unit used for a serving of rice and a cup of sake in Japanese cuisine.</p>
          		<br />
          		<p>Token name: &nbsp;&nbsp;pGō</p>
          		<p>Total supply: &nbsp;&nbsp;1 million</p>
          		<p>Contract: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          		      0x98D23ADA1Da268Bc10E2e0d1585C47971C4B89DD</p>
          		<br /><p />
          		<p className="centered_text">----- 合 Gō Farm -----</p>
          		<br />
          		<p>You can deposit your pGō tokens to earn pGō rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one year without harvesting, at which point you must harvest to continue earning rewards.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x05C1EC18455dB5edcf1389B8fC215d56B42A15C0</p>
          		<br /><p />
          		<p className="centered_text">----- 銀行 Ginkō -----</p>
          		<br />
				<p>Decentraland is a decentralized virtual reality platform powered by the Ethereum blockchain. Within the Decentraland platform, users can create, experience, and monetize their content and applications. The land is divided into parcels that are permanently owned by community members and purchased with MANA, Decentraland's cryptocurrency token.</p>          		
          		
          		<p>You can deposit your MANA tokens to earn MANA rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting, at which point you must harvest to continue earning rewards.</p>
          		
          		<p>Deposit fees are used to buy CLAM and deposit it in Pearl Bank. Two-thirds of the USD+ rewards earned on Pearl Bank are used to buy MANA and deposit it in the rewards fund. The remaining third of the rewards are reinvested in Pearl Bank, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x052034bA1dA874cc49b5B917C67bBBbC605dCfE5</p>
          		<br /><p />   
          		<p className="centered_text">----- 霊 Rei Pool -----</p>
          		<br />
          		<p>You can deposit your pGō tokens to earn CRV rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting, at which point you must harvest to continue earning rewards.</p>
          		
          		<p>Deposit fees are used to buy DAI and deposit it in the atricrypto3 gauge of Curve DAO. Two-thirds of the CRV rewards earned on the atricrypto3 gauge are deposited in the rewards fund. The remaining third of the rewards are reinvested in the atricrypto3 gauge, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x9e69f7cD59585C1f0A9e49BE258202Cd7D34E552</p>
          		<br /><p />              		       		
          		<p className="centered_text">----- 金庫 Vault -----</p>
          		<br />
          		<p>You can deposit your WETH tokens to earn WETH rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting, at which point you must harvest to continue earning rewards.</p>
          		
          		<p>Deposit fees are used to buy CLAM and deposit it in Pearl Bank. Two-thirds of the USD+ rewards earned on Pearl Bank are used to buy WETH and deposit it in the rewards fund. The remaining third of the rewards are reinvested in Pearl Bank, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0xEAD65816Bc4Ea40e811571f27e1C3436Cf7Ce75f</p>
          		<br /><p />
          		<p className="centered_text">----- 竜 Ryū NFT -----</p>
          		<br />
          		<p>You can earn MANA rewards just by having Ryū NFTs in your wallet. It's possible to mint Ryū NFTs for just 10 cents until the maximum supply of one billion is reached. You can also buy and sell Ryū NFTs on the market. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one year without harvesting, at which point you must harvest to continue earning rewards.</p>
          		
          		<p>Minting fees are deposited in the atricrypto3 gauge of Curve DAO. Two-thirds of the CRV rewards earned on the atricrypto3 gauge are used to buy MANA and deposit it in the rewards fund. The remaining third of the rewards are reinvested in the atricrypto3 gauge, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x3f93D887055B6146fcDfe753685B371419D775C8</p>
          		<br /><p />          		
          		<p className="centered_text">----- Disclaimer -----</p>
          		<br />
          		<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
          		
          		<br /><p />	
                <br /><p />
              </div>
		    </div>)
	
    let returnValue;

    returnValue = (
           <div className="container">
              {content}
	       </div>);   

     return returnValue;
   }
}

export default About;
