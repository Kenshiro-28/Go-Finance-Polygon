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
          		<p className="centered_text">----- 金庫 Vault -----</p>
          		<br />
          		<p>You can deposit your WETH tokens to earn WETH rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting, at which point you must harvest to continue earning rewards.</p>
          		
          		<p>Deposit fees are used to buy CLAM and deposit it in Pearl Bank. Two-thirds of the USD+ rewards earned on Pearl Bank are used to buy WETH and deposit it in the rewards fund. The remaining third of the rewards are reinvested in Pearl Bank, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0xEAD65816Bc4Ea40e811571f27e1C3436Cf7Ce75f</p>
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
