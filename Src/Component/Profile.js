import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../Const/Color';

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* User Image/Icon */}
      <View style={styles.profileContainer}>
        <Icon
          name="account-circle"
          size={100}
          color={COLORS.yellow} 
          style={styles.avatarIcon}
        />
        <Text style={styles.userName}>John Doe</Text>
      </View>

      {/* Profile Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="edit" size={24} color="#000" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="settings" size={24} color="#000" />
          <Text style={styles.optionText}>About us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionRow}>
          <Icon name="settings" size={24} color="#000" />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Icon name="contacts" size={24} color="#000" />
          <Text style={styles.optionText}>Help</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.optionRow}>
        <Icon name="exit-to-app" size={24} color="#000" />
          <Text style={styles.optionText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ff6347',  // Customize border color
  },
  userName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  optionsContainer: {
    marginTop: 30,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    marginLeft: 20,
    fontSize: 16,
    color: '#000',
  },
});
