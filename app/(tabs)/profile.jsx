import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // For icons

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocJzuhGz1ZSRMzO24YgUCcFaIaUzMZuBg42TvNemy8MtZb-Hhpj5=s288-c-no' }} 
          style={styles.profilePicture} 
        />
        <Text style={styles.profileName}>Aylee</Text>
      </View>

      {/* VIP Banner */}

      {/* Menu Options */}
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <FontAwesome name={item.icon} size={20} color="#fff" />
            <Text style={styles.menuItemText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

// Menu items for simplicity
const menuItems = [
  { label: 'Share', icon: 'share-alt' },
  { label: 'My game', icon: 'gamepad' },
  { label: 'History', icon: 'history' },
  { label: 'Download', icon: 'download' },
  { label: 'Favorites', icon: 'star' },
  { label: 'History order', icon: 'list-alt' },
  { label: 'Feedback', icon: 'question-circle' },
  { label: 'Official customer service', icon: 'headset' },
  { label: 'Settings', icon: 'cog' }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F0F', // Dark background color
    paddingHorizontal: 20,
  },
  profileHeader: {
    alignItems: 'center',
    marginTop: 30,
  },
  profilePicture: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  vipBanner: {
    backgroundColor: '#F4D03F',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vipText: {
    color: '#333',
    fontWeight: 'bold',
  },
  subscribeButton: {
    backgroundColor: '#F5393D',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  menu: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  menuItemText: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 14,
  },
});

export default ProfileScreen;
