# Usage: 
# bash component.sh <component subfolder> <component name (multiple word names are OK)>
# Example:
# bash component.sh content "carousel image"
# This will generate the following
 # > components
 #   > content --NEW (if not an existing subfolder)
 #     > carousel-image --NEW
 #       - CarouselImage.js --NEW
 #       - CarouselImage.module.css --NEW

# Create subfolder in Components (Suppress output if subfolder exists)
# get folder name by joining args with dashes
# Create folder in subfolder
# get PascalCase name
# Create js and css files
# echo basic React component template into the js file

# Create subfolder in Components (Suppress output if subfolder exists)
cd src/components
mkdir $1 2> /dev/null
cd $1
# get folder name by joining args with dashes
cssCase=$(echo "$2" | sed -r 's/ /-/g')
# Create folder in subfolder
mkdir $cssCase
cd $cssCase
# get PascalCase name
pascalCase=$(echo "$2" | sed -r 's/\<./\U\0/g' | sed -r 's/ //g')
# echo $pascalCase
# Create js and css files
touch "${pascalCase}.js"
touch "${pascalCase}.module.css"
# echo basic React component template into the js file
echo "import React from \"react\"


export default function ${pascalCase}() {
  return (
    <></>
  )
}" > "${pascalCase}.js"