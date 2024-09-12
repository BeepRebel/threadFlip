# ThreadFlip - Thrift and Rent Platform

#(Running)
## Description
A unified platform for buying, selling, and renting thrift clothes with integrated MyntraMoney and wishlist feedback system.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Payments API:** Razorpay
- **AI & Data Analytics:** Python (Pandas, Scikit-learn, TensorFlow)
- **Version Control:** Git

## Features
1. Centralized marketplace for thrift items.
2. Integration with MyntraMoney for transactions.
3. Feedback and wishlist-based trend analysis.
4. AR/VR feature for virtual try-ons.
5. User engagement features like ratings, reviews, and a feedback system.

## Installation

### Backend
1. Navigate to `threadflip-backend` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create `.env` file and add environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    RAZORPAY_KEY_ID=your_razorpay_key_id
    RAZORPAY_KEY_SECRET=your_razorpay_key_secret
    ```
4. Start the server:
    ```bash
    node server.js
    ```

### Frontend
1. Navigate to `threadflip-frontend` directory.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the application:
    ```bash
    npm start
    ```

## License
This project is licensed under the MIT License.
