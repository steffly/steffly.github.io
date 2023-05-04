
export type Environments = 'production' | 'development' | 'staging';
export type State = 'closed' | 'hidden' | 'floating' | 'open';

export interface HostAppProps {
    env: Environments;
}

export interface PartnerConfig {
    /**
     * Unique identifier for the business partner app.
     */
    appId: string;
    authCallbackUrl: string;
    recipient: RecipientConfig;
    sender: SenderConfig;
    environment?: 'development' | 'production' | 'staging';
    enableConsoleLogs?: boolean;
    onLoad?: () => void;
    onMessage?: (eventType: string) => void;
    onStateChange?: (displayStatus: DisplayStatus) => void;
}

export type Config = PartnerConfig & {
    recipient: Required<RecipientConfig>;
    sender: Required<SenderConfig>;
}

interface UserConfig {
    /**
     * Unique identifier for the individual customer.
     */
    id: string;
    /**
     * User's unique email address
     */
    email?: string;
    /**
     * 3 letter country code.
     */
    countryCodeAlpha3?: string;
}

export type RecipientConfig = UserConfig;
export type SenderConfig = UserConfig & {
    /**
     * 2 letter language code.
     */
    languageCode?: string;
    /**
     * Segment that the user is a part of.
     */
    segment?: string;
}

export interface Remitly {
    initialize: (config: PartnerConfig) => void,
    open?: (layout?: Layout) => void,
    close?: () => void,
}

export interface Layout {
    modalPosition?: 'left' | 'right' | 'center'
}

export type DisplayStatus = 'open' | 'closed' | 'floating' | 'hidden';
