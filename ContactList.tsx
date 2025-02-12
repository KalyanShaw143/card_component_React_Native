import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
            uid: 1,
            name: 'Kalyan Kumar',
            status: 'Student',
            imageUrl: 'https://img.freepik.com/free-vector/smiling-redhaired-boy-illustration_1308-176664.jpg?semt=ais_hybrid'
        },
        {
            uid: 2,
            name: 'Gyana Jyoti',
            status: 'Super Hero',
            imageUrl: 'https://img.freepik.com/free-vector/young-man-with-glasses-avatar_1308-173760.jpg?semt=ais_hybrid'
        },
        {
            uid: 3,
            name: 'Raam Jyoti',
            status: 'Hero',
            imageUrl: 'https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?semt=ais_hybrid'
        },
        {
            uid: 4,
            name: 'Pankaj Tiwari',
            status: 'Actor',
            imageUrl: 'https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-175961.jpg?semt=ais_hybrid'
        },
        {
            uid: 5,
            name: 'Rakesh Tiwari',
            status: 'Actor-Director',
            imageUrl: 'https://img.freepik.com/premium-vector/office-worker-wearing-glasses_277909-81.jpg?semt=ais_hybrid'
        }
    ];

    return (
        <View>
            <Text style={styles.headingText}>ContactList</Text>
            <ScrollView style={styles.container}
                scrollEnabled={false}>
                {contacts.map(({ uid, name, status, imageUrl }) => (
                    <View key={uid} style={styles.userCard}>
                        <Image
                            source={{ uri: imageUrl }}
                            style={styles.userImage}
                        />
                        <View>
                            <Text style={styles.userName}>{name}</Text>
                            <Text style={styles.userStatus}>{status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        marginBottom: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 8
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        backgroundColor: '#B6CBBD',
        padding: 4,
        borderRadius: 8
    },
    userImage: {
        height: 60,
        width: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600'
    },
    userStatus: {
        fontSize: 12
    }
})