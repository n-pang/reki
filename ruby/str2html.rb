
param = ARGV[0]
in_file = sprintf('./txt/%s.txt', param)
out_file = sprintf('./html/%s.html', param)
p sprintf("%s => %s", in_file, out_file)

begin
  output = Array.new
  IO.foreach(in_file) {|x|
    print "GOT ", x
    output << x.chomp
  }
  output << ""

  File.open(out_file, 'w') { |f|
    f.write(output.join("<br />\n"))
  }
ensure
  puts "===========finish============"
end
