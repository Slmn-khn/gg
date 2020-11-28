/* 
  Developed by: Mohammed SalmanKhan M A
  Developed date: 28/Nov/2020
  App.js: Holds the calculator interface 
*/

import React, { useState } from 'react';
import { Text, View, StatusBar, SafeAreaView } from "react-native";
import Row from "./src/components/Row";
import Button from "./src/components/Button";
import { styles } from './src/styles/Styles';
import calculator, { initialState } from "./src/util/calculator";


export default class App extends React.Component {
    state = initialState;

    //pass the captured input/event from user to calculator util for processing
    handleClick = (type, value) => {
        this.setState(state => calculator(type, value, state));
    };

    render() {
        //To represent number notation
        function numberformat(num) {
            return Number(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }

        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    {/* View where user see the input/out */}
                    <Text style={styles.value}>
                        {numberformat(this.state.currentValue).toLocaleString()}
                    </Text>
                    {/* View which represent calculator buttons */}
                    <Row>
                        <Button
                            text="C"
                            theme="secondary"
                            onPress={() => this.handleClick("clear")}
                        />
                        <Button
                            text="+/-"
                            theme="secondary"
                            onPress={() => this.handleClick("posneg")}
                        />
                        <Button
                            text="%"
                            theme="secondary"
                            onPress={() => this.handleClick("percentage")}
                        />
                        <Button
                            text="÷"
                            theme="accent"
                            onPress={() => this.handleClick("operator", "/")}
                        />
                    </Row>

                    <Row>
                        <Button text="7" onPress={() => this.handleClick("number", 7)} />
                        <Button text="8" onPress={() => this.handleClick("number", 8)} />
                        <Button text="9" onPress={() => this.handleClick("number", 9)} />
                        <Button
                            text="x"
                            theme="accent"
                            onPress={() => this.handleClick("operator", "*")}
                        />
                    </Row>

                    <Row>
                        <Button text="4" onPress={() => this.handleClick("number", 4)} />
                        <Button text="5" onPress={() => this.handleClick("number", 5)} />
                        <Button text="6" onPress={() => this.handleClick("number", 6)} />
                        <Button
                            text="-"
                            theme="accent"
                            onPress={() => this.handleClick("operator", "-")}
                        />
                    </Row>

                    <Row>
                        <Button text="1" onPress={() => this.handleClick("number", 1)} />
                        <Button text="2" onPress={() => this.handleClick("number", 2)} />
                        <Button text="3" onPress={() => this.handleClick("number", 3)} />
                        <Button
                            text="+"
                            theme="accent"
                            onPress={() => this.handleClick("operator", "+")}
                        />
                    </Row>

                    <Row>
                        <Button
                            text="0"
                            size="double"
                            onPress={() => this.handleClick("number", 0)}
                        />
                        <Button text="." onPress={() => this.handleClick("number", ".")} />
                        <Button
                            text="="
                            theme="accent"
                            onPress={() => this.handleClick("equal")}
                        />
                    </Row>
                </SafeAreaView>
            </View>
        );
    }
}
