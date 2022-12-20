import React, { useState } from "react";
import { Button } from "react-native";
import { ConfigOption } from "./configOption";
import { Remitly } from "./constants";
import { Environments, HostAppProps } from "./types";

const textStyle = {
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: 'Trebuchet MS',
    color: 'rgb(0, 0, 0, 0.8)'
}

export function HostApp({ env: defaultEnv }: HostAppProps) {
    const backgroundImage = 'url(https://i.imgur.com/UKMWpgl.png)';
    const [remitlyState, setRemitlyState] = useState('closed');
    const [appId, setAppId] = useState('app_7nVPijUnbBreiULsJPFG2X3');
    const [modalPosition, setModalPosition] = useState('center');
    const [customerCountry, setCustomerCountry] = useState('us');
    const [customerLanguage, setCustomerLanguage] = useState('en');
    const [receiveCountry, setReceiveCountry] = useState('mexico');
    const [environment, setEnvironment] = useState<string>(defaultEnv);
    const [text, setText] = useState('Message channel output:');
    const [allowIncreasedHeight, setAllowIncreasedHeight] = useState(false);

    function onMessage(message: string) {
        if (message.length > 100) {
            message = message.substring(0, 96) + '...'
        }

        setText((prevText) => {
            const newText = `${prevText} ${message}.`;

            if (allowIncreasedHeight) {
                const overflow = Math.max(0, newText.length - 500);
                return newText.substring(overflow)
            }

            return newText;
        });
    }

    React.useEffect(() => {
        Remitly.initialize({
            appId,
            customerCountry,
            customerLanguage,
            defaultReceiveCountry: receiveCountry,
            environment: environment as Environments,
            enableConsoleLogs: true,
            onMessage,
            onStateChange: setRemitlyState
        });
    }, [appId, customerCountry, customerLanguage, receiveCountry, environment]);

    function addText() {
        setAllowIncreasedHeight(true);
        setText((prevText) => `${prevText} ${loremIpsum}`);
    }

    const darkBlue = '#226ba4';
    const darkTeal = '#467680';

    let safeAreaViewStyle: React.CSSProperties = { marginTop: '32px', width: '92%', backgroundColor: 'white', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', overflow: 'auto' };
    if (!allowIncreasedHeight) {
        safeAreaViewStyle.height = '92%';
    }
    const columnStyle: React.CSSProperties = { height: '100%', flex: '1 1 50%', padding: '12px', border: `2px solid ${darkTeal}`, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' };

    return (
        <div style={{ margin: '1%', flexGrow: 1, backgroundImage, display: 'flex', justifyContent: 'center' }}>
            <div style={safeAreaViewStyle}>
                <div style={columnStyle}>
                    {remitlyState !== 'open' &&
                            <Button color={darkBlue} title={'Open Remitly'} onPress={() => Remitly.open?.({ modalPosition: modalPosition as 'center' | 'left' | 'right' })}/>
                    }
                    {(remitlyState === 'open' || remitlyState === 'floating') && <Button color={darkBlue} title={'Close Remitly'} onPress={() => Remitly.close?.()}/>}
                    <ConfigOption label={'Environment'} value={environment} onChangeText={setEnvironment} />
                    <ConfigOption label={'Modal position'} value={modalPosition} onChangeText={setModalPosition} options={['center', 'left', 'right']} />
                    <ConfigOption label={'App ID'} value={appId} onChangeText={setAppId} options={['passbook', 'express']} />
                    <ConfigOption label={'Customer country'} value={customerCountry} onChangeText={setCustomerCountry} />
                    <ConfigOption label={'Receive country'} value={receiveCountry} onChangeText={setReceiveCountry} />
                    <ConfigOption label={'Language'} value={customerLanguage} onChangeText={setCustomerLanguage} />
                    <div style={{ flexGrow: 1 }} />
                    <div id={'remitly-button-container'} >
                        <button id={'remitly-button'}>OPEN WITH TRANSFORM</button>
                    </div>
                </div>
                <div style={columnStyle}>
                    <div style={{ ...textStyle, height: '100%', padding: '20px', backgroundColor: 'rgb(0,0,0,0.04)'}}>{text}</div>
                    <Button color={darkBlue} title={'Add text'} onPress={addText}/>
                </div>
            </div>
        </div>
    );
}

const loremIpsum = `Nulla pretium orci in risus dapibus eleifend. Curabitur venenatis elit a augue suscipit faucibus. Donec sit amet elementum odio. Phasellus ultricies mi tellus, ac tincidunt odio laoreet id. Mauris nec quam id neque semper porta. Vestibulum sagittis quis lectus ut finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nisl quis erat malesuada rhoncus. Donec vitae tincidunt lectus. Suspendisse euismod, turpis vitae feugiat maximus, mi tortor malesuada metus, vitae congue augue ex pharetra magna. Donec iaculis ipsum ut venenatis mollis. Ut risus turpis, aliquam vel rhoncus id, vestibulum finibus nulla. Integer posuere pharetra erat ut sagittis. Maecenas bibendum libero sem, ac condimentum ipsum ultrices id.

Cras vitae dapibus dui. Nulla facilisi. Vivamus sit amet magna ut dui imperdiet dignissim at ut diam. In hac habitasse platea dictumst. Sed rutrum nulla vel nisi lacinia, hendrerit dignissim diam suscipit. Morbi in nisi a tellus fermentum placerat. Nam rutrum iaculis nisl, eget faucibus nulla fringilla id. Vivamus volutpat urna a cursus blandit. Nullam ac lectus nisi. Sed consequat mi libero, semper maximus leo venenatis ut. Phasellus non metus tortor. Proin accumsan ex id mi posuere, quis dignissim turpis vulputate.

Nunc at arcu malesuada, malesuada mauris nec, elementum turpis. Cras nulla metus, pulvinar at pharetra ut, egestas in nisl. Etiam tortor eros, elementum sit amet sollicitudin eu, viverra a tellus. Morbi non tortor magna. Aliquam interdum nulla nec sem consectetur, nec luctus leo gravida. Cras lacinia purus nec viverra ultricies. Phasellus auctor elit quis dui iaculis venenatis. Nullam tempor rhoncus auctor. Curabitur ultricies tempor purus. Donec malesuada at ligula ut vehicula. Cras tincidunt tellus risus, non tempus nibh scelerisque non. Maecenas tristique metus sit amet congue ullamcorper. Nullam id magna eu turpis condimentum mollis.

Suspendisse purus ex, lacinia in erat vehicula, cursus gravida quam. Aenean sollicitudin, libero eget venenatis dignissim, purus nulla malesuada lacus, et varius quam eros in justo. Donec accumsan justo at varius ultrices. Etiam volutpat convallis leo, in feugiat turpis rhoncus vel. Vivamus pellentesque arcu urna, quis lobortis velit hendrerit at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec accumsan nisl. Ut luctus bibendum odio. Cras dolor nulla, suscipit vitae leo eget, ullamcorper luctus mauris.

Mauris dictum varius leo, non tristique magna rutrum vel. Nullam mattis urna auctor iaculis sagittis. Ut venenatis maximus erat, in scelerisque orci efficitur eget. Cras gravida sapien sit amet pellentesque venenatis. Nulla at congue ipsum. Nulla elementum accumsan pulvinar. Cras sollicitudin mauris quis velit efficitur maximus. Nam id lorem vel lorem lacinia volutpat. Etiam lacinia nisi vel ipsum ornare suscipit. Nunc bibendum augue lorem, non malesuada massa mattis a. Aenean tempor porttitor turpis ut mattis.`;
