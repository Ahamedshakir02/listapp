import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import data from './data.json';

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.picture }} style={styles.picture} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.company}>{item.company}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {selectedItem && (
        <View style={styles.selectedItemContainer}>
          <Image source={{ uri: selectedItem.picture }} style={styles.selectedPicture} />
          <Text style={styles.selectedName}>{selectedItem.name}</Text>
          <Text style={styles.selectedDetails}>ID:{selectedItem._id}</Text>

          <Text style={styles.selectedDetails}>Gender:{selectedItem.gender}</Text>
          <Text style={styles.selectedDetails}>Age:{selectedItem.age}</Text>

          <Text style={styles.selectedDetails}>Company: {selectedItem.company}</Text>
          <Text style={styles.selectedDetails}>Email: {selectedItem.email}</Text>
          <Text style={styles.selectedDetails}>Phone: {selectedItem.phone}</Text>
          <Text style={styles.selectedDetails}>Address: {selectedItem.address}</Text>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#f8f8f8',
  },
  selectedItemContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  selectedPicture: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginBottom: 10,
  },
  selectedName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 7,
  },
  selectedDetails: {
    fontSize: 14,
    color: '#666',
  },
  list: {
    flex: 1
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  picture: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  company: {
    fontSize: 14,
    color: '#666',
  },
  
});
