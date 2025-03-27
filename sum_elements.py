from typing import List

MAX = 100

def calculate_sum(arr: List[int]) -> int:
    """Calculate the sum of a list of integers."""
    return sum(arr)

def get_integer_input(prompt: str) -> int:
    """Prompt the user for an integer input and handle invalid input."""
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Invalid input. Please enter a valid integer.")

def main() -> None:
    """Main function to handle user input and calculate the sum."""
    print("Enter the number of elements (1-100):")
    n = get_integer_input("> ")
    
    if not 1 <= n <= MAX:
        print(f"Invalid input. Please provide a number between 1 and {MAX}.")
        return

    arr = []
    print(f"Enter {n} integers:")
    for i in range(n):
        arr.append(get_integer_input(f"Element {i + 1}: "))

    total = calculate_sum(arr)
    print("Sum of the numbers:", total)

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nProgram terminated by user.")
