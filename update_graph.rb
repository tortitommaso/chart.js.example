#!/usr/bin/ruby

def update_graph(labels, data)

    path = "plot_graph.js"
    f = File.new(path)
    updated_file_lines = []
    f.each_line { |line|
      if line =~ /labels: \[/ then
        line = "labels: #{labels},"
      end
      if line =~ /data: \[/ then
        line = "data: #{data}"
      end
      updated_file_lines << line
    }
        
    File.open(path, 'w') do |file|
      file.puts updated_file_lines
    end

end

label = []
data = []
(0...5).each do |index|
    output = `mysql -hxxx -uxxx -pxxx xxx -NB -e '''select count(*) from Table where date(\`createdAt\`) = date(now() - interval #{index} day);'''`
    label << ["now - #{index} days"]
    data << output
end

update_graph(label, data)
