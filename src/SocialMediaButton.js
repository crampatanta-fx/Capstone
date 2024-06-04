import React from 'react'
import { View, Text,TouchableOpacity, StyleSheet ,Platform,Image,StatusBar} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from './components/theme'

export default function SocialMediaButton({
  title,
  iconColor,
  iconName,
  iconSize,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles =  StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: theme.colors.lightGreen,
    borderRadius: 7,
    width: 240,
    marginBottom: 15,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.lightGreen,
    padding: 5,
    borderRadius: 5,
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: 'bold',
    marginLeft: 15,
  },
})
