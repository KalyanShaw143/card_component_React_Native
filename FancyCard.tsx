import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Trending Place</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: "https://imgs.search.brave.com/Lp6myyT-ijNKey8_VZMiQEvGhjSXtoIEOqyb41xMx2A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oYmxp/bWcubW10Y2RuLmNv/bS9jb250ZW50L2h1/YmJsZS9pbWcvYWRk/aXRpb25hbHR0ZGlt/YWdlcy9tbXQvYWN0/aXZpdGllcy9tX1No/cmklMjBLYXNoaSUy/MFZpc2h3YW5hdGgl/MjBUZW1wbGUlMjBW/YXJhbmFzaV8zX3Bf/NzI4XzY0MC5qcGc" }} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Kashi BishwaNath</Text>
                    <Text style={styles.cardLabel}>Banaras</Text>
                    <Text style={styles.cardDescription}>Kashi Vishvanath Temple is one of the most famous Hindu temples dedicated to Lord Shiva. It is located in Varanasi.
                        The temple stands on the western bank of the holy river Ganga
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>

            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    style={styles.cardImage}
                    source={{ uri: "https://imgs.search.brave.com/MmilglFIPOuIvLFc2DDmcR8_X4025-cQKa1qnVB0DUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2hhcmRoYW0tcGls/Z3JpbWFnZS10b3Vy/LmNvbS9hc3NldHMv/aW1hZ2VzL2tlZGFy/bmF0aC1ub2JsZS53/ZWJw" }} />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Kedarnath</Text>
                    <Text style={styles.cardLabel}>Rishikesh, Uttarakhand</Text>
                    <Text style={styles.cardDescription}>Kedarnath is a pilgrimage site or tirtha dedicated to the Hindu deity Shiva. It is one of the four pilgrimage spots that form a part of the Uttarkhand Char Dham yatra.
                        Kedarnath is located at a distance of 223 km from Rishikesh in Uttarakhand.
                    </Text>
                    <Text style={styles.cardFooter}>12 mins away</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 380,
        height: 450,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: 'gold',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 250,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    cardBody: {
        flex: 1,
        flexGrow: 12,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: "red",
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 6
    },
    cardDescription: {
        fontWeight: '500',
        fontSize: 14,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {}
})