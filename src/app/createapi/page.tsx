"use client";
import React from "react";
import SuperfluidWidget, { WalletManager } from "@superfluid-finance/widget";
//@ts-ignore
import superTokenList from "@superfluid-finance/tokenlist";
import { useMemo } from "react";

export default function MyComponent() {
  const data: any = {
    paymentDetails: {
      paymentOptions: [
        {
          receiverAddress: "0x671425Ae1f272Bc6F79beC3ed5C4b00e9c628240",
          chainId: 5,
          superToken: {
            address: "0x671425Ae1f272Bc6F79beC3ed5C4b00e9c628240",
          },
          flowRate: {
            amountEther: "1",
            period: "month",
          },
          userData: " your user data goes here ",
        },
      ],
    },
  };
  const walletManager = useMemo(
    () => ({
      open,
      closed,
    }),
    [open, closed]
  );
  return (
    <div>
      <SuperfluidWidget
        {...data}
        tokenList={superTokenList}
        type="dialog"
        walletManager={walletManager}
      >
        {({ openModal }) => (
          <button onClick={() => openModal()}>Open Superfluid Widget</button>
        )}
      </SuperfluidWidget>
    </div>
  );
}
