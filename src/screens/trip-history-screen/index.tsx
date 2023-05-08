import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import TripItem from "../../components/trip-item";
import styles from "./styles";

import { useAppDispatch } from "@hooks/index";
import axiosClient from "../../api/axiosClient";

const TripHistory = () => {
  const dispatch = useAppDispatch();
  const [posts, setPosts] = useState<[]>([]);
  useEffect(() => {
    const callback = async (data: any) => {
      console.log("Trip history callback", data);
      try {
        const res = await axiosClient.get(
          "http://jsonplaceholder.typicode.com/users"
        );
        if ((res as []).length > 0) setPosts(res || []);
      } catch (error: any) {}
    };
    dispatch({ type: "GET_LIST_TRIPS_HISTORY", callback });
  }, []);
  return (
    <View style={styles.container}>
      {posts.length > 0 ? (
        // <SectionList
        //   sections={posts}
        //   keyExtractor={(item, index) => index.toString()}
        //   renderItem={({ item }) => <TripItem item={item} />}
        //   renderSectionHeader={({ section }) => (
        //     <View style={styles.headerList}>
        //       <Text style={styles.headerListText}>{section.title}</Text>
        //     </View>
        //   )}
        //   stickySectionHeadersEnabled={false}
        //   onEndReachedThreshold={10}
        //   ListFooterComponent={() => <Text>Loading</Text>}
        //   onEndReached={() => {
        //     console.log("Chạy nè");
        //   }}
        // />
        <FlatList
          data={posts}
          renderItem={({ item, index }) => (
            <TripItem item={item} index={index} />
          )}
          keyExtractor={(item: any) => item.id.toString()}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default TripHistory;
