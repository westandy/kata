class Solution(object):
    def find_char(self, char, string):
      index = len(string) - 1

      while index >= 0:
        if char == string[index]:
          return index + 1

        index -= 1

      return -1

    def lengthOfLongestSubstring(self, string):
      current_substring = string[0]
      first_pointer = 0
      second_pointer = 1
      longest_substring = current_substring

      print('Current substring:', current_substring)
      print('Longest substring:', longest_substring)
      print('First pointer:', first_pointer)
      print('Second pointer:', second_pointer)
      print('--------')

      while second_pointer < len(string):
        if not string[second_pointer] in current_substring:
          current_substring += string[second_pointer]
        else:
          if len(current_substring) > len(longest_substring):
            longest_substring = current_substring

          first_pointer = second_pointer
          new_substring_start = self.find_char(string[second_pointer], current_substring)
          current_substring = string[new_substring_start:first_pointer + 1]

        second_pointer += 1
        print('Current substring:', current_substring)
        print('Longest substring:', longest_substring)
        print('First pointer:', first_pointer)
        print('Second pointer:', second_pointer)
        print('--------')

      if not string[second_pointer-1] in current_substring[:-1] and len(current_substring) > len(longest_substring):
        longest_substring = current_substring