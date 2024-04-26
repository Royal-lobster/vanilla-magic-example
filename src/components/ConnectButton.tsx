"use client";

import React from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

const ConnectButton = () => {
	const { connect, connectors, status, isIdle } = useConnect();
	const { address, isConnected } = useAccount();
	const { disconnect } = useDisconnect();
	return (
		<div>
			{!isConnected ? (
				<button
					type="button"
					onClick={() => connect({ connector: connectors[0] })}
					className="bg-[#6452f6] rounded-full mt-4 text-white py-2 px-10"
				>
					{status === "pending"
						? "Loading..."
						: isIdle
							? "Connect"
							: "Connecting..."}
				</button>
			) : (
				<div className="flex flex-col items-center justify-center">
					<p className="text-sm text-neutral-200 border-t pt-4 mt-4 border-neutral-600 text-center">
						Connected with {address}
					</p>
					<button
						type="button"
						onClick={() => disconnect()}
						className="bg-red-500 rounded-full mt-4 text-white py-2 px-10"
					>
						Disconnect
					</button>
				</div>
			)}
		</div>
	);
};

export default ConnectButton;
