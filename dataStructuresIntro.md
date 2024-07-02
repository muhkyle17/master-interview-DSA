# Data Structures

### Data structure vs. Algorithms

- Data structures are a collection of values
- Algorithms are steps or processes to manipulate a collection of values
- With both of these, it allows us to write programs

```
Data Structures + Algorithms = Programs
```

### Data Structure

- A collection of values
- Values can have relationships among them and can have functions applied to them
- Each one is unique in what it can do — it’s specialized for its own thing

### 2 parts to understanding data structures

1. How to Build One - Pre built
2. How to Use It - How to use one over the other

### How Computers Store Data

[Computer Memory](https://statmath.wu.ac.at/courses/data-analysis/itdtHTML/node55.html)

[CrashCourse Register and RAM: Crash Course Computer Science #6](https://www.youtube.com/watch?v=fpnE6UAfbtU)

### RAM

- In order for computers to run code, it needs to keep track of variables like numbers strings and arrays
- These variables are stored in the Random Access Memory (RAM)
- You lose the memory when the computer turns off
- Think of RAM as a massive storage area like a data structure
  - Has a lot of shelves called an address that allows you to run programs on the computer
  - Each shelf holds 8 bits or numbers of 1’s and 0’s
  - A bit a tiny electrical switch that can be turned on or off or 1 or 0
  - Each shelf has 1 Byte of storage
  - We can access the bits at a random given time really fast because of the connections
  - Programs tend to access memory nearby and the less it has to travel, the faster it will run
  - The program will run faster at shelf 0 and 1 versus at shelf 10001 and 10002

### Storage

- This is where you store music files, photo files, video files and documents
- The storage can be disk drive or a flash drive or a solid state drive (SSD)
- This is persistent like when you turn off the computer or something
- You can’t just keep storing it here because persistent storage is slow

### CPU

- Does the actual work inside the computer
- Needs access to the RAM and the Storage
- It can access the information in the RAM a lot faster
- The CPU is connected to something called the memory controller which does the actual reading and writing of the memory
- The CPU asks the memory controller what’s in a specific shelf → The memory controller will look for it and let the CPU what is there thus the memory controller has access to each shelf
- **CPU Cache**: The CPU can access a copy of some information that’s really recent and it makes it faster
  - LRU Cache
