import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image,
    Dimensions,
} from 'react-native';
import { connect, useDispatch } from 'react-redux';
import imagePaths from '../../../utilities/imagePaths';
import HomeCard from '../../../components/homeCard';
import styles from './style';
import { fetchProducts } from '../../../redux/features/getetProductReducer';
import CartHeader from '../../../components/HomeHeaders/CartHeader';

import { useNavigation } from '@react-navigation/native';
import BlueBottomButton from '../../../components/BlueBottomButton';
import { fetchCart } from '../../../redux/features/getCartReducer';
import { fetchWishlist } from '../../../redux/features/wishlistReducer';
import { fetchProfile } from '../../../redux/features/profileReducer';

const { width } = Dimensions.get('window');

const Home = ({ products, loading, error, fetchProducts, metadata }) => {
    const navigation = useNavigation();
    const [showToggle, setShowToggle] = useState(false);
    const dispatch = useDispatch();
    const listRef = useRef(null);

    useEffect(() => {
        fetchProducts({ page: 1 });
    }, [fetchProducts]);

    const onRefresh = () => {
        fetchProducts({ page: 1 });
    };

    const handleEndReached = () => {
        if (!loading && metadata.nextPage) {
            fetchProducts({ page: metadata.nextPage });
        }
    };

    useEffect(()=>{
        dispatch(fetchCart())
        dispatch(fetchWishlist())
        dispatch(fetchProfile())
    },[])


    const renderHeader = () => {
        return (
            <View>
                <Image source={imagePaths.loginTopVector} style={styles.heightBottom} />
                <View style={styles.hedaerBottomStyle}>
                    <CartHeader navigation={navigation} />

                </View>
            </View>
        );
    };

    const renderFlatlist = () => {
        return (
            <View style={styles.loginContainer}>
                {loading && metadata.currentPage === 1 ? (
                    <Text>Loading...</Text>
                ) : error ? (
                    <Text>Error: {typeof error === 'object' ? JSON.stringify(error) : error}</Text>
                ) : (

                    <FlatList
                        ref={listRef}
                        contentContainerStyle={{ flexDirection: 'column' }}
                        data={products}
                        keyExtractor={(item, index) => String(index)}
                        onRefresh={onRefresh}
                        refreshing={loading && metadata.currentPage === 1}
                        renderItem={({ item }) => (
                            <HomeCard
                                dataItem={item}
                                navigation={navigation}
                            />
                        )}
                        onEndReached={handleEndReached}
                        onEndReachedThreshold={0.5}
                        ListFooterComponent={loading && metadata.currentPage > 1 ? <ActivityIndicator /> : null}
                    />

                )}
                <View style={{ paddingHorizontal: 20 }}>
                    <BlueBottomButton />
                </View>
            </View>
        );
    };


    return (

        <View style={styles.topBanner}>
            {renderHeader()}

            {renderFlatlist()}
        </View>


    );
};

const mapStateToProps = state => ({
    products: state?.product?.products,
    loading: state?.product?.loading,
    error: state?.product?.error,
    metadata: state?.product?.metadata,
});

const mapDispatchToProps = {
    fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
