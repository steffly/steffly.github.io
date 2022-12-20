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
        <div style={{ paddingTop: '12px', display: 'flex', flexDirection: 'row' }}>
            <Text style={{ width: 128 }}>{label}</Text>
            <TextInput style={{ borderWidth: 1, padding: 2 }} value={value} onChangeText={onChangeText} />
            {options?.length && (
                <>
                    <Text style={{ width: 96, textAlign: 'center' }}>Options</Text>
                    <Picker onValueChange={onChangeText}>
                        {options.map((option) => 
                            <Picker.Item value={option} label={option} />
                        )}
                    </Picker>
                </>
            )}
        </div>
    );
}
