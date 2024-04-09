import { StyleSheet } from "react-native";

export default VendreStyles = () => {  
    const styles = StyleSheet.create({    
        imageContainer: {      
            width: 120,      
            height: 120,      
            backgroundColor: "white",      
            paddingHorizontal: 5,      
            paddingVertical: 10,    
        },    
            flatListContainer: { 
                height: 160, 
                width: "100%", 
                backgroundColor: "#eee" 
            },    
                flatList: { width: "100%" },    
                image: {      
                    width: "100%",      
                    height: undefined,      
                    aspectRatio: 1,    
                },    
                deleteButton:     {      
                    position: "absolute",      
                    right: 5,      
                    top: 5,      
                    backgroundColor: "white",      
                    borderRadius: 15,      
                    width: 30,      
                    height: 30,      
                    justifyContent: "center",
                    alignItems: "center",    
                },    
                deleteButtonText: {      
                    color: "#555",      
                    fontWeight: "bold",    
                },  
            });  
            return styles;
        };