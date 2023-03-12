import { StyleSheet, FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from "../components/ListItem"

export const ClipScreen = ({ navigation }) => {


    //store/index.js>reducerの定義したところ(取得)
    const clips = useSelector((state) => state.user.clips)

    return (
        <SafeAreaView>
            <FlatList
                data={clips}
                renderItem={({ item }) => (
                < ListItem
                imageUrl={item.urlToImage}
                title={item.title}
                author={item.author}
                onPress={() => navigation.navigate('Article', { article: item })}
            />
                )}
            keyExtractor={(item, index) => index.toString()}
            />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    articles: {
        flex: 1,
        backgroundColor: '#fff',
    },

});
