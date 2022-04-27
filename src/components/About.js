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
          		<p>Gō Finance is a 100% decentralized DeFi platform with an open source web interface that anyone can download and run locally on their computer.</p>
          		<p>Smart contracts have no owner privileges and run an immutable set of rules. They are deployed on Polygon and Binance Smart Chain.</p>
          		<p>Keep in mind that trading is a risky activity that can involve a loss of money. You should only invest the amount you can afford to lose.</p>
          		<br /><p />
          		<p className="centered_text">----- Tokenomics -----</p>
          		<br />
          		<p>pGō is a fully decentralized token with limited supply and very slow issuance, which makes it a good store of value. The name comes from the gō (合) or cup, which is a traditional Japanese unit used for a serving of rice and a cup of sake in Japanese cuisine.</p>
          		<br />
          		<p>Token name: &nbsp;&nbsp;pGō</p>
          		<p>Total supply: &nbsp;&nbsp;1 million</p>
          		<p>Contract: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          		      0x98D23ADA1Da268Bc10E2e0d1585C47971C4B89DD</p>
          		<br /><p />
          		<p className="centered_text">----- 合 Gō Farm -----</p>
          		<br />
          		<p>You can stake your pGō tokens to earn pGō rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one year without harvesting. Keep in mind that your rewards may suddenly increase or decrease depending on how much other users harvest and the total deposits on the farm, so the most conservative approach is frequent harvests.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x05C1EC18455dB5edcf1389B8fC215d56B42A15C0</p>
          		<br /><p />
          		<p className="centered_text">----- 銀行 Ginkō -----</p>
          		<br />
          		<p>You can stake your MAI tokens to earn MAI rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting. Keep in mind that your rewards may suddenly increase or decrease depending on how much other users harvest and the total deposits on the contract, so the most conservative approach is frequent harvests.</p>
          		
          		<p>Deposit fees are used to buy PEARL and deposit it in the OtterClam 180 days Chest. Two-thirds of the PEARL rewards earned on OtterClam are used to buy MAI and deposit it in the rewards fund. The remaining third of the rewards are reinvested in the Chest, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x5C5Af8977D7A927716E676a1AcbF8d7817943B92</p>
          		<br /><p />          		
          		<p className="centered_text">----- 将軍 Shōgun Pool -----</p>
          		<br />
          		<p>You can stake your pGō tokens to earn MAI rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting. Keep in mind that your rewards may suddenly increase or decrease depending on how much other users harvest and the total deposits on the pool, so the most conservative approach is frequent harvests.</p>
          		
          		<p>Deposit fees are used to buy PEARL and deposit it in the OtterClam 180 days Chest. Two-thirds of the PEARL rewards earned on OtterClam are used to buy MAI and deposit it in the rewards fund. The remaining third of the rewards are reinvested in the Chest, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0xFea737e92E218c07bEf967705B101Ba560434c95</p>
          		<br /><p />
          		<p className="centered_text">----- 霊 Rei Pool -----</p>
          		<br />
          		<p>You can stake your pGō tokens to earn wsKLIMA rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting. Keep in mind that your rewards may suddenly increase or decrease depending on how much other users harvest and the total deposits on the pool, so the most conservative approach is frequent harvests.</p>
          		
          		<p>Deposit fees are used to buy PEARL and deposit it in the OtterClam 180 days Chest. Two-thirds of the PEARL rewards earned on OtterClam are used to buy wsKLIMA and deposit it in the rewards fund. The remaining third of the rewards are reinvested in the Chest, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x91b5a83eb4Ef50d9c98f44fCea7cc3572c29522F</p>
          		<br /><p />
          		<p className="centered_text">----- 気 Ki Pool -----</p>
          		<br />
          		<p>You can stake your pGō tokens to earn BLOK rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting. Keep in mind that your rewards may suddenly increase or decrease depending on how much other users harvest and the total deposits on the pool, so the most conservative approach is frequent harvests.</p>
          		
          		<p>Deposit fees are used to buy PEARL and deposit it in the OtterClam 180 days Chest. Two-thirds of the PEARL rewards earned on OtterClam are used to buy BLOK and deposit it in the rewards fund. The remaining third of the rewards are reinvested in the Chest, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x7E0c38133a0f660E40658Ea0b9Ec3Ba32d64d357</p>
          		<br /><p />
          		<p className="centered_text">----- 金庫 Vault -----</p>
          		<br />
          		<p>You can stake your WETH tokens to earn WETH rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.</p>
          		
          		<p>You can harvest up to one time per day, but the maximum staking power is reached after one month without harvesting. Keep in mind that your rewards may suddenly increase or decrease depending on how much other users harvest and the total deposits on the vault, so the most conservative approach is frequent harvests.</p>
          		
          		<p>Deposit fees are used to buy PEARL and deposit it in the OtterClam 180 days Chest. Two-thirds of the PEARL rewards earned on OtterClam are used to buy WETH and deposit it in the rewards fund. The remaining third of the rewards are reinvested in the Chest, increasing performance over time.</p>
          		
          		<p>Contract: &nbsp;&nbsp;0x0F938EeED8d7189E41fE27ECe83802fFf33F52e0</p>
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
