import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink)
    }

    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>
                        What's new in Mobile App development.
                    </Text>
                </View>
                <Image
                style={styles.cardImage}
                source={{uri: 'https://t4.ftcdn.net/jpg/05/67/64/29/240_F_567642900_ybeyHMqPU4wAWeaxIiXEIax5qmlF1rv6.jpg'}}
                />
                <View style={styles.cardContainer}>
                    <Text numberOfLines={3}>
                    Mobile app development is a subset of app development that specifically targets mobile devices. It involves creating software applications for smartphones, tablets, and other mobile devices, often using platforms like Android and iOS.
                    </Text>
                </View>

                <View style={styles.footerContainer}>
                   <TouchableOpacity
                   onPress={() => openWebsite('https://en.wikipedia.org/wiki/Mobile_app_development')}
                   >
                    <Text style={styles.socialLink}>
                        Read More...
                    </Text>
                   </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ActionCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 380,
        height: 380,
        borderRadius: 6,
        marginVertical:12,
        marginHorizontal:14
    },
    elevatedCard: {
        backgroundColor: '#F2AE66',
        elevation:3,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor:'blue',
        shadowOpacity: 0.4
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 600
    },
    cardImage: {
        height: 200,
        width: 370,
        margin: 5
        
    },
    cardContainer: {
        padding: 10
    },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    socialLink:{
        fontSize: 16,
        color: 'blue',
        backgroundColor: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 6
        
    }
})