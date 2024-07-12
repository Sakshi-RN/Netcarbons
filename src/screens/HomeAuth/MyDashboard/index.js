import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, ActivityIndicator, ScrollView, FlatList, Image } from 'react-native';
import CommonHeader from '../../../components/HomeHeaders/CommonHeader';
import styles from './style';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { showErrorMessage } from '../../../utilities/helpers';
import { carbon } from '../../../redux/features/carbonReducer';
import GraphComponent from '../../../components/GraphComponent';
import ProjectsCard from '../../../components/ProjectsCard';
import images from '../../../theme/Images';

const MyDashboard = ({ navigation }) => {
    const DATA = [
        { id: '1' },
        { id: '2' },
        { id: '3' },
    ];

    const { metricsData, metricsLoading } = useSelector(state => state.carbon);
    const dispatch = useDispatch();

    useEffect(() => {
        getMetrics();
    }, []);

    const getMetrics = () => {
        dispatch(carbon.getCarbonMetricsThread())
            .then((responseJson) => {
                if (responseJson?.payload?.success) {
                } else {
                    showErrorMessage(responseJson?.payload?.message);
                }
            })
            .catch((error) => {
                console.error(error);
                showErrorMessage(error.message);
            });
    };

    const handleBackPress = () => {
        navigation.goBack();
    };

    const renderMetricsData = () => (
        metricsLoading ? (
            <ActivityIndicator size={"small"} color='#7BA986' />
        ) : (
            <>
                <MetricBlock
                    value={`${metricsData?.ghgReduced || 0} Metric Tons`}
                    caption="Carbon Offsets Bought"
                    fontSize={4}
                />
                <MetricBlock
                    value={`${metricsData?.treesPlanted || 0}`}
                    caption="Number of Trees"
                />
                <MetricBlock
                    value={`${metricsData?.projectsSupportedCount || 0}`}
                    caption="Number of Projects Supported"
                />
            </>
        )
    );

    const renderMyPurchase = () => (
        <View>
            <Text style={styles.title}>My purchases</Text>
            <View style={styles.row}>
                <View style={styles.greenbarView} />
                <Text style={styles.textStyle}>Total Purchases</Text>
            </View>
            <GraphComponent />
        </View>
    );

    const renderTotalTrees = () => (
        <View>
            <Text style={styles.title}>Total Trees Planted: 156</Text>
            <View style={styles.row}>
                <View style={styles.greenbarView} />
                <Text style={styles.textStyle}>Total Trees Planted</Text>
            </View>
            <GraphComponent />
        </View>
    );

    const renderCarbonFootprint = () => (
        <View>
            <Text style={styles.title}>Carbon Footprint: Emitted vs Reduced</Text>
            <View style={styles.viewRow}>
                <View style={styles.greenbarView} />
                <Text style={styles.textStyle}>Total CO2 Emitted (Tons)</Text>
                <View style={styles.redbarView} />
                <Text style={styles.textStyle}>Total CO2 Emitted (Tons)</Text>
            </View>
            <GraphComponent />
        </View>
    );

    const renderTotalProjects = () => (
        <View>
            <Text style={styles.totalText}>Total Projects Supported: 3</Text>
        </View>
    );

    const renderProductList = () => (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ marginTop: 20 }}>
                <Image source={images.tracker} style={{ width: 30, height: 30, }} />
                <View style={{ borderLeftWidth: 2, borderLeftColor: 'black', flex: 1, marginLeft: 12 }} />
            </View>
            <ProjectsCard />
        </View>
    );

    const renderFlatlist = () => (
        <FlatList
            data={DATA}
            renderItem={renderProductList}
            keyExtractor={item => item.id}
        />
    );

    return (
        <View style={styles.container}>
            <CommonHeader onBackPress={handleBackPress} />
            <ScrollView style={styles.graphContainer} showsVerticalScrollIndicator={false}>
                <Text style={styles.headerText}>My Dashboard</Text>
                {renderMyPurchase()}
                {renderTotalTrees()}
                {renderCarbonFootprint()}
                {renderTotalProjects()}
                {renderFlatlist()}
            </ScrollView>
        </View>
    );
};

const MetricBlock = ({ value, caption, fontSize }) => (
    <View style={styles.metricContainer}>
        <Text style={[styles.metricValue, { fontSize: responsiveFontSize(fontSize || 3) }]}>{value}</Text>
        <Text style={styles.metricCaption}>{caption}</Text>
    </View>
);

export default MyDashboard;
