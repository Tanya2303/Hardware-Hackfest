# Safe Sphere

## 💡 Inspiration

Plants require proper care and maintenance, including adequate watering, to thrive and grow. If plants do not receive the proper amount of water, they can wither, wilt, or even die. Similarly, ensuring the safety and security of your home when you are away is crucial to protect your belongings and loved ones from potential intruders or accidents. So we wanted to create a project that can help people to keep their home safe and know the proper amount of water for their plants.

## 💻 What it does

On Safe Sphere users can:

- Check the presence of any person in the area.
- Calculate the number of steps taken by the user.
- Find the correct amount of water required for plants.
- Check the temperature, humidity and pressure of the environment.

## ⚙️ How we built it

- React Js: For frontend
- Arduino: For controlling the modules.
- IR Sensor: For detecting the presence of people.
- ENV Sensor: For detecting the environment temperature, humidity and pressure.

## 🤖 Best Use of MATLAB

We have used MATLAB to create a model of the environment and to predict the temperature, humidity and pressure of the environment with the help of the data collected from the sensors and allow the user to water the plants accordingly. MATLAB helped us in the following ways:
- We used MATLAB fuction `fit` to predict the temperature, humidity and pressure of the environment with the help of the data collected from the sensors.
- We used MATLAB fuction `plot` to plot the graph of the data collected from the sensors and the predicted data.
- We used MATLAB fuction `scatter` to plot the graph of the data collected from the sensors and the predicted data.

## 🧠 Challenges we ran into

- Because we had to implement the project by a certain date, finishing the project was difficult.
- I had to learn how to use Hardware Device because I am a new user.
- Implementing the cloud connection from IoT Module to web app was a bit difficult.

## 🏅 Accomplishments that we're proud of

- I was pleased that I was able to learn how to use Hardware Devices.
- I was pleased that I was able to create a fully functional IoT + website that can help you water your plants and keep your home safe.

## 📖 What we learned

- I learned how to use Azure for IoT.
- I learned how to create an IoT Module.

## 🚀 What's next for Safe Sphere

- More modules to be added.
- I want to add more features to the environment module.
- I want to expand the functionality of the IR Sensor.