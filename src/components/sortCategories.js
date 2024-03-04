import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { sortCategoryData } from '../constants';
import { theme } from '../theme';

export default function SortCategories() {
  const [activeSort, setActiveSort] = useState('Popular');

  return (
    <View style={s4.list}>
      {sortCategoryData.map((sort, index) => {
        const isActive = sort === activeSort;
        return (
          <TouchableOpacity
            key={index}
            style={[
              s4.categoryButton,
              isActive && s4.activeCategoryButton, // Apply active styles conditionally
            ]}
            onPress={() => setActiveSort(sort)}
          >
            <Text style={[s4.pop, isActive && s4.activePop]}>{sort}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const s4 = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ebe9e6',
    width: '90%',
    height: 50,
    marginHorizontal: 20,
    marginTop: 18,
    borderRadius: 18,
  },
  categoryButton: {
    padding: 3,
    paddingHorizontal: 4,
    //backgroundColor: 'red',
  },
  activeCategoryButton: {
    backgroundColor: 'white',
    borderRadius:"30" // Change the background color when active
  },
  pop: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  activePop: {
    color: theme.text, // Change the text color when active
  },
});
