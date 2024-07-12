import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { BarChart, XAxis, YAxis } from 'react-native-svg-charts';
import images from '../../theme/Images';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const GraphComponent = () => {
    const purchasesData = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
    const axesSvg = { fontSize: 12, fill: 'black' };
    const verticalContentInset = { top: -10, bottom: -20 };
    const xAxisHeight = 20;


    return (
        <View style={styles.container}>
            <YAxis
                data={purchasesData}
                style={{ marginBottom: xAxisHeight }}
                contentInset={verticalContentInset}
                svg={axesSvg}
            />
            <View style={{ flex: 1, marginLeft: 10 }}>
                <ImageBackground
                    source={images.checkbox_background}
                    style={styles.bgStyles}

                >
                    <BarChart
                        style={{ flex: 1 }}
                        data={purchasesData}
                        svg={{ fill: '#75ad50' }}
                        contentInset={verticalContentInset}
                        spacingInner={0.5}
                    />
                </ImageBackground>
                <View style={{ marginTop: 10 }}>
                    <XAxis
                        style={styles.xAxisStyle}
                        data={purchasesData}
                        formatLabel={(value, index) => ['JAN24', 'FEB24', 'MAR24', 'APR24', 'MAY24', 'JUN24', 'JUL24', 'AUG24', 'SEP24', 'OCT24', 'NOV24', 'DEC24'][index]}
                        contentInset={{ left: 40, right: -30 }}
                        svg={axesSvg}
                        rotation={45}
                        
                    />
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 400,
        backgroundColor: 'white'
    },
    bgStyles: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'grey',
    },
    xAxisStyle: {
        marginHorizontal: responsiveWidth(-10),
        marginRight: responsiveWidth(-40),
    }
});

export default GraphComponent;
