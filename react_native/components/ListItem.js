import { StyleSheet, Image, View, Text } from 'react-native';

export const ListItem = () => {
    return (
        <View style={styles.itemContainer}>
          <View style={styles.leftContainer}>
            <Image
              style={{ with: 100, height: 100 }}
              source={{ url: "https://picsum.photos/id/10/300/300" }}
            />
          </View>
          <View style={styles.rightContainer}>
            <Text numberOfLines={3} style={styles.text}>
              学習は日々の積み重ねが大切です。調査によるとvfdsfsbfdsbfdsd</Text>
            <Text style={styles.subText}>ReactNews</Text>
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