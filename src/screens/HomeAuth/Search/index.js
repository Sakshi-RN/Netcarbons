import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import styles from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import CartHeader from '../../../components/HomeHeaders/CartHeader';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts, updateSuggestions, resetSearchState } from '../../../redux/features/SearchReducer';
import HomeCard from '../../../components/homeCard';
import { fetchProducts } from '../../../redux/features/getetProductReducer';
import { connect } from 'react-redux';
import BlueBottomButton from '../../../components/BlueBottomButton';

const Search = ({ products, loading, error, fetchProducts }) => {
    const navigation = useNavigation();
    const searchData = useSelector(state => state.search.searchResults);
    const suggestions = useSelector(state => state.search.suggestions);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const listRef = useRef(null);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    const onRefresh = () => {
        fetchProducts();
    };

    const handleSearch = () => {
        dispatch(searchProducts({ searchText }));
    };

    const handleTextChange = (text) => {
        setSearchText(text);
        if (text.length >= 3) {
            const filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(text.toLowerCase())
            );
            dispatch(updateSuggestions(filteredProducts));
        } else {
            dispatch(updateSuggestions([]));
            dispatch(resetSearchState());
        }
    };

    const handleSuggestionSelect = (item) => {
        setSearchText(item.name);
        dispatch(updateSuggestions([]));
        dispatch(searchProducts({ searchText: item.name }));
    };

    const renderSuggestions = () => (
        <FlatList
            data={suggestions}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSuggestionSelect(item)}>
                    <HomeCard
                        dataItem={item}
                        navigation={navigation}
                    />
                </TouchableOpacity>
            )}
        />
    );

    const renderFlatlist = () => (
        <View style={styles.loginContainer}>
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="grey" />
                </View>
            ) : error ? (
                <Text>Error: {typeof error === 'object' ? JSON.stringify(error) : error}</Text>
            ) : searchData.length > 0 ? (
                <FlatList
                    ref={listRef}
                    contentContainerStyle={{ flexDirection: 'column' }}
                    data={searchData}
                    keyExtractor={(item, index) => String(index)}
                    onRefresh={onRefresh}
                    refreshing={loading}
                    renderItem={({ item }) => (
                        <HomeCard
                            dataItem={item}
                            navigation={navigation}
                        />
                    )}
                    ListFooterComponent={loading ? <ActivityIndicator /> : null}
                />
            ) : (
                <Text style={styles.errorText}>No products found</Text>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <CartHeader navigation={navigation} />
 
            <View style={styles.searchInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Search here...."
                    placeholderTextColor="#888"
                    value={searchText}
                    onChangeText={handleTextChange}
                />
                <TouchableOpacity onPress={handleSearch}>
                    <Entypo name="magnifying-glass" size={25} color="grey" />
                </TouchableOpacity>
            </View>
            {suggestions.length > 0 && searchText.length >= 3 && searchData.length === 0 && renderSuggestions()}
            {renderFlatlist()}
            <View style={{paddingHorizontal:20}}>
            <BlueBottomButton/>
            </View>
        </View>
    );
};

const mapStateToProps = (state) => ({
    products: state?.product?.products,
    loading: state?.product?.loading,
    error: state?.product?.error,
});

const mapDispatchToProps = {
    fetchProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
