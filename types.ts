
export type Environments = 'production' | 'development' | 'staging';
export type State = 'closed' | 'hidden' | 'floating' | 'open';

export interface HostAppProps {
    env: Environments;
}

// TODO: Move these types to the sdk folder and host them somewhere they can be downloaded, perhaps npm
export interface RemitlyConfig {
    onLoad?: () => void,
    onMessage?: (message: string) => void,
    onStateChange?: (state: State) => void,
    enableConsoleLogs?: boolean,

    // These match the native RemittanceConfig
    appId: string;
    environment: Environments;
    customerCountry: string;
    customerLanguage: string;
    defaultReceiveCountry?: string;
    customerEmail?: string;
}

export interface Remitly {
    initialize: (config: RemitlyConfig) => void,
    open?: (layout?: Layout) => void,
    close?: () => void,
}

export interface Layout {
    modalPosition?: 'left' | 'right' | 'center'
}
