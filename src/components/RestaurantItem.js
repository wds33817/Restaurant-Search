import { Image, View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {withNavigation} from "react-navigation";
import { elevation } from "../common/styles";

function RestaurantItem({restaurant, navigation}) {
    return (
        <TouchableOpacity
        onPress={()=>navigation.navigate("Restaurant", {id: restaurant.id})}>
            <View style={[styles.container, styles.elevation]}>
                <Image style={styles.image} source={{uri: restaurant.image_url}}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.header}>{restaurant.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.rating}>{restaurant.rating}</Text>
                        <Text style={styles.money}>{restaurant.price}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    elevation,
    container: {
        backgroundColor: "white",
        height: 100,
        alignSelf: "stretch",
        marginVertical: 10,
        borderRadius: 50,
        flexDirection: "row",
        alignItems: "center"
    },
    image: {
        width: 75,
        height: 75, 
        borderRadius: 50,
        marginLeft: 10
    },
    infoContainer: {
        flex: 1,
        paddingHorizontal: 10
    }, 
    header: {
        fontSize: 18, 
        fontWeight: "bold",
        marginBottom: 4
    },
    info: {
        flexDirection: "row",   
    },
    rating: {
        marginRight: 20,
    }, 
    money: {
        color: "gold"
    }
})

export default withNavigation(RestaurantItem);