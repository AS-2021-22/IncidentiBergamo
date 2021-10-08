import csv

inputFile = 'incidenti_bergamo_intera.csv'
outputFile = 'incidenti_bergamo_for_SQL.csv'

CSV_file = [] #all the data will be loaded here

def swapData(data): #function to swap the Date DD/MM/YYYY to YYYY-MM-DD | data is a string 'YYYY/MM/DD'
    lData = data.split('/') #data is a string, it is splitted in a list [DD,MM,YYYY]
    lData[0], lData[2] = lData[2], lData[0] #swap -> [YYYY,MM,DD]
    return '-'.join(lData) #return a string with join using '-' as separator -> 'YYYY-MM-DD'


#......................................READING SECTION..................................................#
with open(inputFile,'r') as csvfile:
    reader = csv.reader(csvfile, delimiter=',')
    for row in reader: #row is every line in the CSV file as list
        row[2] = swapData(row[2])  #pos=2 -> Date as string 
        for i in range(10,14): #from 10 to 13 there are true, false that needs to be parsed to 1 or 0
            row[i] = 1 if row[i]=='true' else 0
        CSV_file.append(row) #append the line to the list

#......................................WRITING SECTION..................................................#
with open(outputFile,'w',newline='', encoding='utf-8') as csvfile:
    writer = csv.writer(csvfile, delimiter=',')
    for row in CSV_file:
        writer.writerow(row)