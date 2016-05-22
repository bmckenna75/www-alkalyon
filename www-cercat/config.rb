###
# Page options, layouts, aliases and proxies
###

set :js_dir, 'js'
set :css_dir, 'css'

# Per-page layout changes:
#
# With no layout
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# With alternative layout
# page "/path/to/file.html", layout: :otherlayout

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

# General configuration

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do

  def header_gen(link)
    answer = ""
    if link[0] == 'dropdown'
      answer += '<div class="item has-dropdown"> <div class="dropdown"> <a href="#">'
      answer += link[1][0] + '<span class="arrow">&#9658;</span></a>'
      answer += '<div class="dropdown-content">'
      link[1][1..-1].each do |item|
        item_url = link[1][0].downcase + '/' + item.downcase
        answer += '<a class="' + is_active(item_url) + '" href="/' + is_active_url(item_url) + '">' + item + '</a>'
      end
      answer += '</div></div></div>'
    else
      link[1].each do |item|
        answer += '<div class="item"><a class="' + is_active(item.downcase) + '" href="/' + is_active_url(item.downcase) + '">' + item + '</a></div>'
      end
    end
    return answer
  end

  def is_active(page)
    current_page.url == "/" + page + "/" ? 'current' : 'not-current'
  end

  def is_active_url(url)
    current_page.url == "/" + url + "/" ? '#' : url
  end

end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript
end
