import Web3 from 'web3/dist/web3.min.js';
import { swapabi, swapaddress, tokenBalance } from './GCS-to-USDM-abi';

const web3 = new Web3(window.ethereum)
const abi = [
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      }
]
const xaus = "0x66d7ca7c5111f6544a06bbf2c430a1d070d02d27"
const gcs = "0x3d2bb1f7ab5d64c3917dbe03d37843421a42e0cd"
const usdm = "0x08ab7e5c08cc0d78589fc506c35ea9c2520a86bc"

export const login =async()=> {
    const data = await window.ethereum.enable();
    return data[0];
}

export const getUserAddress = async()=> {
    try {
        const address = await web3.eth.getAccounts();
        return address[0]
    } catch (error) {
        console.log(error)
    }
}

export const getContract = async(abi, address)=> {
    try {
        const Contract = new web3.eth.Contract(abi, address)
        return Contract
    } catch (error) {
        console.log(error)
    }
}


export const towie = async(amount)=> {
    try {
        const number = await web3.utils.toWei(amount.toString(), 'ether');
        return number
    } catch (error) {
        console.log(error)
    }
}


export const GetChainId = async()=>{
    const id = await web3.eth.getChainId();
    return id;
}

export const XAUs_Totak_Supply =async()=>{
    try {
     const contract = new web3.eth.Contract(abi, xaus)
     const data = await contract.methods.totalSupply().call();
     // console.log("contract",contract)
     return Number(data/10**18)
    } catch (error) {
        // console.log(error)
    }
}

export const USDM_Totak_Supply =async()=>{
    try {
     const contract = new web3.eth.Contract(abi, usdm)
     const data = await contract.methods.totalSupply().call();
     // console.log("contract",contract)
     return Number(data/10**18)
    } catch (error) {
        // console.log(error)
    }
}

export const GCS_Totak_Supply =async()=>{
    try {
     const contract = new web3.eth.Contract(abi, gcs)
     const data = await contract.methods.totalSupply().call();
     // console.log("contract",contract)
     return Number(data/10**18)
    } catch (error) {
        // console.log(error)
    }
}

export const SwapToken = async(tab,amount,ratio,usdm,gcs)=>{
    try {
        const a = await towie(amount);
        const r = await towie(ratio);
        const b = await towie(1/ratio);    
        const contract = new web3.eth.Contract(swapabi, swapaddress);
        console.log(a,r,b)
        if(tab){
            const isApprove = await Allow(gcs);
            if(Number(isApprove)>0){
                const data = await contract.methods.swapGCSTOUSDM(a,r).send({from:await getUserAddress()});
                return data;
            }
            else{
                const data2 = await Approve(gcs);
                const data = await contract.methods.swapGCSTOUSDM(a,r).send({from:await getUserAddress()});
                return data;
            }
        }
        else{
            const isApprove = await Allow(usdm);
            if(Number(isApprove)>0){
              const data = await contract.methods.swapUSDMTOGCS(a,b).send({from:await getUserAddress()});
              return data;
            }
            else{
                await Approve(usdm);
                const data = await contract.methods.swapUSDMTOGCS(a,b).send({from:await getUserAddress()});
                return data;
            }
        }
    } catch (error) {
        console.log(error)
    }
    
}

export const SwapToken2 = async(tab,amount,ratio,usdm,xaus)=>{
    try {
        const a = await towie(amount);
        const r = await towie(ratio);
        const b = await towie(1/ratio);    
        const contract = new web3.eth.Contract(swapabi, swapaddress);
        
        if(tab){
            const isApprove = await Allow(usdm);
            if(Number(isApprove)>0){
                console.log(a,b)
                const data = await contract.methods.swapUSDMTOXAUS(a,b).send({from:await getUserAddress()});
                return data;
            }
            else{
                console.log(a,b)
                const data2 = await Approve(usdm);
                const data = await contract.methods.swapUSDMTOXAUS(a,b).send({from:await getUserAddress()});
                return data;
            }
        }
        else{
            const isApprove = await Allow(xaus);
            if(Number(isApprove)>0){
                console.log(a,r)
              const data = await contract.methods.swapXAUSTOUSDM(a,r).send({from:await getUserAddress()});
              return data;
            }
            else{
                console.log(a,r)
                await Approve(xaus);
                const data = await contract.methods.swapXAUSTOUSDM(a,r).send({from:await getUserAddress()});
                return data;
            }
        }
    } catch (error) {
        console.log(error)
    }
    
}


export const getTokenBalancegcs =async(address)=>{
    try {
        const contract = new web3.eth.Contract(tokenBalance, address);
        const data = await contract.methods.balanceOf(await getUserAddress()).call();
        return data/10**18;
    } catch (error) {
        console.log(error)
    }
}

export const getTokenBalanceusdm =async(address)=>{
    try {
        const contract = new web3.eth.Contract(tokenBalance, address);
        const data = await contract.methods.balanceOf(await getUserAddress()).call();
        return data/10**18;
    } catch (error) {
        console.log(error)
    }
}
export const Approve = async(address) =>{
    try {
        const contract = new web3.eth.Contract(tokenBalance, address);
        const data = await contract.methods.approve(swapaddress,115792089237316195423570985008687907853269984665640564039457584007913129639935n).send({from:await getUserAddress()});
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const Allow =async(address)=>{
    try {
        const contract = new web3.eth.Contract(tokenBalance, address);
        const data = await contract.methods.allowance(await getUserAddress(), swapaddress).call();
        return data;
    } catch (error) {
        
    }
}