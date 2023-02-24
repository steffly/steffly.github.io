import React from 'react';
import { Text, TextInput } from "react-native";
import { Picker } from 'react-native-web';

export interface ConfigOptionProps {
    value: string;
    label: string;
    onChangeText: (newValue: string) => void;
    options?: string[];
}

export function ConfigOption({ value, label, onChangeText, options }: ConfigOptionProps) {
    return (
        <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text style={{ width: 128, lineHeight: 40 }}>{label}</Text>
            <div style={{ padding: '8px 0px' }}>
                <TextInput style={{ borderWidth: 1, height: 24 }} value={value} onChangeText={onChangeText} />
            </div>
            {options?.length && (
                <>
                    <Text style={{ width: 96, textAlign: 'center', lineHeight: 40 }}>Options</Text>
                    <div style={{ padding: '8px 0px' }}>
                        <Picker onValueChange={onChangeText}>
                            {options.map((option, idx) => 
                                <Picker.Item value={option} label={option} key={`option-${idx}`} />
                            )}
                        </Picker>
                    </div>
                </>
            )}
        </div>
    );
}
