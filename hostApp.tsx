import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextStyle, ViewStyle } from "react-native";
import { Remitly } from "./constants";
import { HostAppProps } from "./types";

const textStyle: TextStyle = {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: 'Trebuchet MS'
}

export function HostApp({ env }: HostAppProps) {
    const backgroundImage = 'url(https://i.imgur.com/UKMWpgl.png)';
    const [remitlyState, setRemitlyState] = useState('closed');
    const [text, setText] = useState('Lorem ipsum dolor sit amet.');
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

    const openRemitlyLeft = () => Remitly.open?.({ modalPosition: 'left' });
    const openRemitlyRight = () => Remitly.open?.({ modalPosition: 'right' });
    const openRemitlyCenter = () => Remitly.open?.({ modalPosition: 'center' });
    const closeRemitly = () => Remitly.close?.();

    React.useEffect(() => {
        Remitly.initialize({
            appId: 'passbook',
            customerCountry: 'us',
            customerLanguage: 'en',
            defaultReceiveCountry: 'mexico',
            environment: env,
            enableConsoleLogs: true,
            onMessage,
            onStateChange: setRemitlyState
        });
    }, []);

    function addText() {
        setAllowIncreasedHeight(true);
        setText((prevText) => `${prevText} ${loremIpsum}`);
    }

    const darkBlue = '#226ba4';

    let safeAreaViewStyle: ViewStyle = { marginTop: '40px', width: '80%', backgroundColor: 'white', display: 'flex', flexDirection: 'column' };
    if (!allowIncreasedHeight) {
        safeAreaViewStyle.height = '90%';
    }

    return (
        <div style={{ margin: '4%', flexGrow: 1, backgroundImage, display: 'flex', justifyContent: 'center' }}>
            <SafeAreaView style={safeAreaViewStyle}>
                <div style={{ position: 'sticky', top: 0, backgroundColor: 'white' }}>
                    {remitlyState !== 'open' &&
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                            <Button color={darkBlue} title={'Open Remitly Left'} onPress={openRemitlyLeft}/>
                            <Button color={darkBlue} title={'Open Remitly Center'} onPress={openRemitlyCenter}/>
                            <Button color={darkBlue} title={'Open Remitly Right'} onPress={openRemitlyRight}/>
                        </div>}
                    {(remitlyState === 'open' || remitlyState === 'floating') && <Button color={darkBlue} title={'Close Remitly'} onPress={closeRemitly}/>}
                    <div id={'remitly-button-container'} >
                        <button id={'remitly-button'}>OPEN WITH TRANSFORM</button>
                    </div>
                </div>
                <Text style={{ ...textStyle, padding: '20px', flexGrow: 1 }}>{text}</Text>
                <Button color={darkBlue} title={'Add text'} onPress={addText}/>
            </SafeAreaView>
        </div>
    );
}

const loremIpsum = `Nulla pretium orci in risus dapibus eleifend. Curabitur venenatis elit a augue suscipit faucibus. Donec sit amet elementum odio. Phasellus ultricies mi tellus, ac tincidunt odio laoreet id. Mauris nec quam id neque semper porta. Vestibulum sagittis quis lectus ut finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra nisl quis erat malesuada rhoncus. Donec vitae tincidunt lectus. Suspendisse euismod, turpis vitae feugiat maximus, mi tortor malesuada metus, vitae congue augue ex pharetra magna. Donec iaculis ipsum ut venenatis mollis. Ut risus turpis, aliquam vel rhoncus id, vestibulum finibus nulla. Integer posuere pharetra erat ut sagittis. Maecenas bibendum libero sem, ac condimentum ipsum ultrices id.

Cras vitae dapibus dui. Nulla facilisi. Vivamus sit amet magna ut dui imperdiet dignissim at ut diam. In hac habitasse platea dictumst. Sed rutrum nulla vel nisi lacinia, hendrerit dignissim diam suscipit. Morbi in nisi a tellus fermentum placerat. Nam rutrum iaculis nisl, eget faucibus nulla fringilla id. Vivamus volutpat urna a cursus blandit. Nullam ac lectus nisi. Sed consequat mi libero, semper maximus leo venenatis ut. Phasellus non metus tortor. Proin accumsan ex id mi posuere, quis dignissim turpis vulputate.

Nunc at arcu malesuada, malesuada mauris nec, elementum turpis. Cras nulla metus, pulvinar at pharetra ut, egestas in nisl. Etiam tortor eros, elementum sit amet sollicitudin eu, viverra a tellus. Morbi non tortor magna. Aliquam interdum nulla nec sem consectetur, nec luctus leo gravida. Cras lacinia purus nec viverra ultricies. Phasellus auctor elit quis dui iaculis venenatis. Nullam tempor rhoncus auctor. Curabitur ultricies tempor purus. Donec malesuada at ligula ut vehicula. Cras tincidunt tellus risus, non tempus nibh scelerisque non. Maecenas tristique metus sit amet congue ullamcorper. Nullam id magna eu turpis condimentum mollis.

Suspendisse purus ex, lacinia in erat vehicula, cursus gravida quam. Aenean sollicitudin, libero eget venenatis dignissim, purus nulla malesuada lacus, et varius quam eros in justo. Donec accumsan justo at varius ultrices. Etiam volutpat convallis leo, in feugiat turpis rhoncus vel. Vivamus pellentesque arcu urna, quis lobortis velit hendrerit at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla nec accumsan nisl. Ut luctus bibendum odio. Cras dolor nulla, suscipit vitae leo eget, ullamcorper luctus mauris.

Mauris dictum varius leo, non tristique magna rutrum vel. Nullam mattis urna auctor iaculis sagittis. Ut venenatis maximus erat, in scelerisque orci efficitur eget. Cras gravida sapien sit amet pellentesque venenatis. Nulla at congue ipsum. Nulla elementum accumsan pulvinar. Cras sollicitudin mauris quis velit efficitur maximus. Nam id lorem vel lorem lacinia volutpat. Etiam lacinia nisi vel ipsum ornare suscipit. Nunc bibendum augue lorem, non malesuada massa mattis a. Aenean tempor porttitor turpis ut mattis.`;
