# Gō Finance

Gō Finance is a cooperative DeFi platform. To use the farms, users must contribute to the shared fund by paying deposit fees. Smart contracts use the shared fund to automatically execute custom strategies that generate rewards for all depositors.

The web interface is open source and anyone can download and run it locally on their computer. Smart contracts have no owner privileges and run an immutable set of rules.

Keep in mind that trading is a risky activity that can involve a loss of money. You should only invest the amount you can afford to lose.

## Tokenomics

pGō is a fully decentralized token that can be staked to earn rewards. The name comes from the gō (合) or cup, which is a traditional Japanese unit used for a serving of rice and a cup of sake in Japanese cuisine.

Token name: pGō

Total supply: 1 million

Contract: 0x98D23ADA1Da268Bc10E2e0d1585C47971C4B89DD

## Gō farm

You can deposit your pGō tokens to earn pGō rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.

You can harvest up to one time per day, but the maximum staking power is reached after one year without harvesting, at which point you must harvest to continue earning rewards.

Contract: 0x05C1EC18455dB5edcf1389B8fC215d56B42A15C0

## Ki Pool

You can deposit your pGō tokens to earn pGō rewards that are variable and subject to the dynamics of supply and demand. Your rewards increase with your staking power, which depends on how often you harvest your rewards: the longer the time between harvests, the higher the staking power.

You can harvest up to one time per day, but the maximum staking power is reached after one year without harvesting, at which point you must harvest to continue earning rewards.

Deposit fees are used to buy ETH and POL, which are then added to the ETH / POL liquidity pool on QuickSwap. Over the course of the year, less than 1 % of the liquidity pool investment will be allocated to buying pGō for the rewards fund. The ETH / POL liquidity pool continuously earns trading fees from user transactions on QuickSwap. These fees are automatically reinvested into the pool, increasing the total value of the liquidity position over time.

Contract: 0x323bC939e7a490b75BF43F88E318aDcd2e28848e

## Website

The website is hosted on IPFS.

**CID:** bafybeid4jwmlxw6hb6ykeerste24zrxb7tpy2nakocah6nnf5p4xndjlwa

**IPFS URI:** ipfs://bafybeid4jwmlxw6hb6ykeerste24zrxb7tpy2nakocah6nnf5p4xndjlwa

**Gateway:** https://ipfs.io/ipfs/bafybeid4jwmlxw6hb6ykeerste24zrxb7tpy2nakocah6nnf5p4xndjlwa

**IPFS info:** https://en.wikipedia.org/wiki/InterPlanetary_File_System

## Installing

- Install Node.js (https://nodejs.org) 
- Download this repository
- Open a system console and run this command:

```
$ npm install
```

## Building

Run this command to create an optimized production build:

```
$ npm run build
```

## Running

Run this command to start a static server:

```
$ npx serve -s build
```

Now you can connect to your static server using this URL: http://localhost:5000

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

