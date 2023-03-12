import { StyleSheet, FlatList, SafeAreaView, ScrollView, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { ClipButton } from "../components/ClipButton"
import { useDispatch, useSelector } from 'react-redux';
import { addClip, deleteClip } from "../store/userSlice"

export const ArticleScreen = ({ route }) => {
    const { article } = route.params;

    const dispatch = useDispatch();

    //store/index.js>reducerの定義したところ
    const clips = useSelector((state) => state.user.clips)

    //条件が含まれてるもの
    const isClipped = clips.some((clip) => clip.url === article.url)

    const onPressClip = () => {
        if (isClipped) {

            dispatch(deleteClip(article))
        } else {

            dispatch(addClip(article))
        }

    }

    return (
        <SafeAreaView style={styles.articles}>

            <ClipButton onPress={onPressClip} enabled={isClipped} />
            <WebView
                style={styles.container}
                source={{ uri: article.url }}
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
