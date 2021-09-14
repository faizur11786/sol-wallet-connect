import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';

const Navigation: FC = () => {
    const { wallet } = useWallet();

    return (
        <nav style={{ padding: "1rem"}}>
            <h1></h1>
            <div>
                <WalletMultiButton />
                {wallet && <WalletDisconnectButton />}
            </div>
        </nav>
    );
};

export default Navigation;
