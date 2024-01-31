import React, {useState} from "react";
import KeyListener from "../components/KeyListener";

const user = {
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const Player = () => {
    const [playerPosition, setPlayerPosition] = useState({x: 0, y: 0});
    const movementSpeed = 5;

    const handleInputChange = (inputValue) => {

        switch (inputValue) {
            case 'w':
                setPlayerPosition({
                    x: playerPosition.x,
                    y: playerPosition.y - movementSpeed,
                });
                break;
            case 'a':
                setPlayerPosition({
                    x: playerPosition.x - movementSpeed,
                    y: playerPosition.y,
                });
                break;
            case 's':
                setPlayerPosition({
                    x: playerPosition.x,
                    y: playerPosition.y + movementSpeed,
                });
                break;
            case 'd':
                setPlayerPosition({
                    x: playerPosition.x + movementSpeed,
                    y: playerPosition.y,
                });
                break;
            default:
                break;
        }
    };

    return (
        <>
            <KeyListener onInputChange={handleInputChange}/>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    position: 'absolute',
                    left: `${playerPosition.x}px`,
                    top: `${playerPosition.y}px`,
                    width: user.imageSize,
                    height: user.imageSize,
                }}
            />
        </>
    );
}

export default Player;