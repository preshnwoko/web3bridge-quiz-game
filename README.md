# Quiz Game 🎯

A fast-paced, timed quiz game built with React, TypeScript, and Vite. Test your knowledge across various topics with a 20-second timer per question and compete on the leaderboard!

## Features

- **Timed Questions**: 20 seconds per question to keep you on your toes
- **Instant Feedback**: Get immediate visual feedback on correct/incorrect answers
- **Local Leaderboard**: Save your scores and compete with others
- **Responsive Design**: Works great on desktop and mobile
- **Toast Notifications**: Clean success/error messages
- **Question Validation**: Robust question loading with error handling

## How to Play

1. **Start the Quiz**: Questions load automatically when you open the app
2. **Answer Quickly**: You have 20 seconds per question - choose wisely!
3. **Get Feedback**: Correct answers show a green success toast, incorrect ones show red
4. **Auto-Advance**: Questions advance automatically after answering or when time runs out
5. **Save Your Score**: Enter your name at the end to save to the leaderboard
6. **View Leaderboard**: Check out the top 10 scores from all players

## Game Rules

- Each question has a 20-second timer
- Questions auto-advance when time expires (counts as incorrect)
- Timer resets when you select an answer
- Final score is based on correct answers only
- Leaderboard shows top 10 scores sorted by highest first

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd quiz-game
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
yarn build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── quiz.tsx           # Main quiz logic and timer
│   ├── questionCard.tsx   # Individual question display
│   ├── scoreScreen.tsx    # End game screen with name input
│   └── leaderboard.tsx    # Top 10 scores display
├── hook/
│   └── fetchQuestions.ts  # Custom hook for loading questions
├── types.ts               # TypeScript type definitions
└── App.tsx               # Main app component

public/
└── questions.json        # Quiz questions data
```

## Adding Questions

Questions are stored in `public/questions.json`. Each question follows this format:

```json
{
  "id": "unique-id",
  "topic": "category-name",
  "question": "Your question here?",
  "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
  "answerIndex": 0
}
```

- `answerIndex` corresponds to the correct option (0-based index)
- Questions support HTML in the question text
- Invalid questions are automatically filtered out

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **SCSS** - Styling
- **React Toastify** - Toast notifications
- **Local Storage** - Leaderboard persistence

## Development

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn lint` - Run ESLint
- `yarn preview` - Preview production build

### Code Style

The project uses ESLint with TypeScript rules. Run `yarn lint` to check for issues.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Add your questions or improvements
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
