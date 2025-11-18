"""
==========================================
PERPETUITY THEME - PYTHON SYNTAX TEST
==========================================
Demonstrates Python-specific syntax highlighting

Author: Sathwik Kuncham
Version: 2.0.0
"""

from typing import List, Dict, Optional, Generic, TypeVar
import asyncio
import re

# ===== DECORATORS =====
def timing_decorator(func):
    """Decorator to measure function execution time"""
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result
    return wrapper

@timing_decorator
@deprecated
def legacy_function():
    pass

# ===== CLASS WITH DECORATORS =====
class User:
    """User class with properties and methods"""

    def __init__(self, name: str, age: int):
        """
        Initialize a user

        Args:
            name: User's name
            age: User's age
        """
        self.name = name  # 'self' is specially highlighted
        self._age = age

    @property
    def age(self):
        """Property decorator highlighted"""
        return self._age

    @age.setter
    def age(self, value: int):
        if value >= 0:
            self._age = value

    @staticmethod
    def validate_email(email: str) -> bool:
        """Static method with type annotations"""
        pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        return bool(re.match(pattern, email))

    @classmethod
    def from_dict(cls, data: Dict[str, any]):
        """Class method"""
        return cls(data['name'], data['age'])

    def __str__(self) -> str:
        """Magic method highlighted"""
        return f"User({self.name}, {self._age})"

    def __repr__(self) -> str:
        return self.__str__()

# ===== F-STRINGS =====
name = "Alice"
age = 30
# F-string with expressions
message = f"Hello, {name}! You are {age} years old."
multiline = f"""
    Name: {name}
    Age: {age}
    Status: {'Active' if age >= 18 else 'Minor'}
"""

# ===== TYPE ANNOTATIONS =====
def process_data(
    items: List[int],
    multiplier: float = 1.0,
    filter_func: Optional[callable] = None
) -> Dict[str, any]:
    """Function with comprehensive type hints"""
    result = [x * multiplier for x in items]
    if filter_func:
        result = list(filter(filter_func, result))
    return {'data': result, 'count': len(result)}

# ===== ASYNC/AWAIT =====
async def fetch_user_data(user_id: int) -> Dict[str, any]:
    """Async function"""
    await asyncio.sleep(0.1)
    return {'id': user_id, 'name': 'Alice'}

async def main():
    """Main async function"""
    users = await asyncio.gather(
        fetch_user_data(1),
        fetch_user_data(2),
        fetch_user_data(3)
    )
    return users

# ===== LAMBDA FUNCTIONS =====
square = lambda x: x ** 2
add = lambda x, y: x + y

# ===== LIST COMPREHENSIONS =====
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers if x % 2 == 0]
matrix = [[i*j for j in range(5)] for i in range(5)]

# ===== DICTIONARY COMPREHENSIONS =====
word_lengths = {word: len(word) for word in ['hello', 'world', 'python']}

# ===== SET OPERATIONS =====
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}
union = set_a | set_b
intersection = set_a & set_b
difference = set_a - set_b

# ===== CONTEXT MANAGERS =====
class FileManager:
    def __init__(self, filename: str):
        self.filename = filename

    def __enter__(self):
        self.file = open(self.filename, 'r')
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()

# Using context manager
with FileManager('data.txt') as f:
    content = f.read()

# ===== GENERATORS =====
def fibonacci(n: int):
    """Generator for Fibonacci sequence"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# ===== EXCEPTION HANDLING =====
try:
    risky_operation = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
except Exception as e:
    print(f"Unexpected error: {e}")
else:
    print("No errors occurred")
finally:
    print("Cleanup")

# ===== CONSTANTS (should be purple) =====
MAX_CONNECTIONS = 100
API_ENDPOINT = "https://api.example.com"
DEFAULT_TIMEOUT = 30

# ===== SPECIAL CONSTANTS =====
if __name__ == "__main__":
    print("Running as main module")
    result = None
    flag = True
    empty = False

# ===== BUILTIN FUNCTIONS =====
print("Hello, World!")
length = len([1, 2, 3])
total = sum(range(10))
maximum = max([1, 5, 3, 9, 2])
sorted_list = sorted([3, 1, 4, 1, 5])

# ===== DOCSTRING VARIATIONS =====
def example():
    """
    This is a docstring (should be styled differently from comments)

    Returns:
        None
    """
    pass

# Regular comments look different from docstrings
# This is a regular comment

'''
Multi-line string
that is NOT a docstring
'''

"""
==========================================
PYTHON HIGHLIGHTING IMPROVEMENTS
==========================================

NEW FEATURES:
✅ Decorators (@decorator) - Yellow, italic
✅ F-strings and expressions - Green with teal expressions
✅ Magic methods (__init__, __str__) - Italic
✅ 'self' parameter - Purple, italic (special)
✅ Docstrings - Muted teal, italic
✅ Type annotations - Teal variants
✅ Async/await keywords - Teal
✅ Constants (CAPS) - Purple
✅ Regular comments vs docstrings - Different colors
✅ Built-in functions - Italic

==========================================
"""
