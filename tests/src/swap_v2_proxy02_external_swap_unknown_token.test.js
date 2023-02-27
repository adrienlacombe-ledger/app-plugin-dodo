import "core-js/stable";
import "regenerator-runtime/runtime";
import {
  waitForAppScreen,
  zemu,
  genericTx,
  nano_models,
  SPECULOS_ADDRESS,
} from "./test.fixture";
import { ethers } from "ethers";
import { parseEther, parseUnits } from "ethers/lib/utils";

const contractAddr = "0xa356867fdcea8e71aeaf87805808803806231fdc";
const pluginName = "swap";
const abi_path = `../${pluginName}/abis/` + contractAddr + ".json";
const abi = require(abi_path);

nano_models.forEach(function (model) {
  jest.setTimeout(50000);
  test(
    "[Nano " + model.letter + "] Swap V2 Proxy02 External Swap Unknown Token",
    zemu(model, async (sim, eth) => {
      const contract = new ethers.Contract(contractAddr, abi);

      const fromToken = "0xdAC17F958D2ee523a2206206994597C13D831ec7";
      const toToken = "0x41545f8b9472D758bB669ed8EaEEEcD7a9C4Ec29";
      const approveTarget = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";
      const swapTarget = "0xDef1C0ded9bec7F1a1670819833240f027b25EfF";
      const fromTokenAmount = parseUnits("1343560512", "wei");
      const minReturnAmount = parseUnits("28471151959593036279", "wei");
      const callDataConcat =
        "0x415565b0000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec700000000000000000000000041545f8b9472d758bb669ed8eaeeecd7a9c4ec290000000000000000000000000000000000000000000000000000000050151b400000000000000000000000000000000000000000000000a07d8cf4dd9dde017d00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000000018000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000002a000000000000000000000000000000000000000000000000000000000000002800000000000000000000000000000000000000000000000000000000050151b400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000f53796e617073650000000000000000000000000000000000000000000000000000000000000000000000000050151b400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000800000000000000000000000001116898dda4015ed8ddefb84b6e8bc24528af2d89169558600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000030000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800000000000000000000000041545f8b9472d758bb669ed8eaeeecd7a9c4ec29000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000002a0ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000012556e6973776170563300000000000000ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000000000000000000000000000000000000000a07d8cf4dd9dde017d000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000e592427a0aece92de3edee1f18e0157c058615640000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000002ba0b86991c6218b36c1d19d4a2e9eb0ce3606eb4800271041545f8b9472d758bb669ed8eaeeecd7a9c4ec29000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000c00000000000000000000000000000000000000000000000000000000000000003000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec7000000000000000000000000a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000000000000000000000000000000000000000000869584cd000000000000000000000000221d5c4993297fd95fa17743b9297e2e49fce9d200000000000000000000000000000000000000000000002455e92c8d62ac3db1";
      const isIncentive = false;
      const deadLine = Number(1655456361);

      // EDIT THIS: adapt the signature to your method
      // signature: swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
      // EDIT THIS: don't call `swapExactETHForTokens` but your own method and adapt the arguments.
      const { data } = await contract.populateTransaction.externalSwap(
        fromToken,
        toToken,
        approveTarget,
        swapTarget,
        fromTokenAmount,
        minReturnAmount,
        callDataConcat,
        isIncentive,
        deadLine
      );

      // Get the generic transaction template
      let unsignedTx = genericTx;
      // Modify `to` to make it interact with the contract
      unsignedTx.to = contractAddr;
      // Modify the attached data
      unsignedTx.data = data;
      // EDIT THIS: get rid of this if you don't wish to modify the `value` field.
      // Modify the number of ETH sent
      unsignedTx.value = parseEther("0");

      // Create serializedTx and remove the "0x" prefix
      const serializedTx = ethers.utils
        .serializeTransaction(unsignedTx)
        .slice(2);

      const tx = eth.signTransaction("44'/60'/0'/0", serializedTx);

      const right_clicks = model.letter === "S" ? 7 : 5;


      // Wait for the application to actually load and parse the transaction
      await waitForAppScreen(sim);
      // Navigate the display by pressing the right button 10 times, then pressing both buttons to accept the transaction.
      // EDIT THIS: modify `10` to fix the number of screens you are expecting to navigate through.
      await sim.navigateAndCompareSnapshots(
        ".",
        model.name + "_swap_v2_proxy02_external_swap_unknown_token",
        [right_clicks, 0]
      );

      await tx;
    })
  );
});
