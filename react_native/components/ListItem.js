import { StyleSheet, Image, View, Text } from 'react-native';

/**
 * 
 * @param {
 * imageUrl: 画像URL(strimg)
 * title: タイトル(strimg)
 * author: ニュース提供元(strimg)
 * 
 * } props 
 * @returns 
 */

export const ListItem = (props) => {
    return (
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={{ with: 100, height: 100 }}
              source={{ url: props.imageUrl}}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text numberOfLines={3} style={styles.text}>
              {props.title}</Text>
            <Text style={styles.subText}>{props.author}</Text>
          </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    itemContainer: {
      height: 100,
      width: "100%",
      flexDirection: "row",
    },
    leftContainer: {
      width: 100,
    },
    rightContainer: {
      flex: 1,
      padding: 10,
      justifyContent: 'space-between',
    },
    text: {
      fontSize: 16,
    },
    subText: {
      fontSize: 12,
      color: "gray",
    }
  
  });