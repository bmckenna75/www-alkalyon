###
# Page options, layouts, aliases and proxies
###

set :js_dir, 'js'
set :css_dir, 'css'

set :markdown_engine, :redcarpet

#activate :middleman_simple_thumbnailer

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
  #activate :middleman_simple_thumbnailer
  activate :dexterity, :pre_clear_cache => false
end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do

  def parse_markdown(source_text)
    #puts Tilt['markdown']
    Tilt['markdown'].new { source_text }.render
  end


  def lightbox_insert(image)
    answer = '<a href="/' + config[:images_dir] + '/' + image["url"] + '" class="magnific-popup" title="' + image["title"] + '">'
    answer +='<img src="' + create_image_thumb(image["url"], data.gallery.config.thumb_resize_string) + '" title="' + image["title"] + '"/>'
    answer += '</a><p>' + image["caption"] + '</p>'
    return answer
  end

  def lightbox_insert_tiles(image)
    answer = '<a href="/' + config[:images_dir] + '/' + image["url"] + '" class="magnific-popup" title="' + image["title"] + '">'
    answer +='<img src="' + create_square_thumb(image["url"], data.gallery.config.square_resize_string) + '" title="' + image["title"] + '"/>'
    answer += '<div class="tile-caption"><div class="tile-caption-inner">' + image["caption"] + '</div></div></a>'
    return answer
  end

  def header_gen(link)
    answer = ""
    if link[0] == 'dropdown'
      answer += '<div class="item has-dropdown"> <div class="dropdown"> <div class="dropdown-head">'
      answer += link[1][0] + '<span class="arrow">&#9658;</span></div>'
      answer += '<div class="dropdown-content">'
      link[1][1..-1].each do |item|
        item_url = link[1][0].downcase + '/' + item.downcase
        answer += '<a class="' + is_active(item_url) + '" href="/' + is_active_url(item_url) + '">' + item + '</a>'
      end
      answer += '</div></div></div>'
    else
      link[1].each do |item|
        answer += '<div class="item ' + + is_active(item.downcase) + '"><a class="' + is_active(item.downcase) + '" href="/' + is_active_url(item.downcase) + '">' + item + '</a></div>'
      end
    end
    return answer
  end

  def is_active(page)
    current_page.url == "/" + page + "/" ? 'current' : 'not-current'
  end

  def is_active_url(url)
    current_page.url == "/" + url + "/" ? url + '#' : url
  end

  def is_active_root()
    current_page.url == "/" ? '"#"' : '"/"'
  end

end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  #activate :minify_css
  temp = Hash.new
  activate :dexterity
  activate :favicon_maker do |f|
    f.template_dir  = 'source/images'
    f.icons = {
      "_favicon_hires.png" => [
        { icon: "apple-touch-icon-152x152-precomposed.png" },
        { icon: "apple-touch-icon-114x114-precomposed.png" },
        { icon: "apple-touch-icon-72x72-precomposed.png" },
        { icon: "apple-touch-icon-57x57-precomposed.png" },
        { icon: "apple-touch-icon.png", size: "57x57" },
        { icon: "favicon-196x196.png" },
        { icon: "favicon-160x160.png" },
        { icon: "favicon-96x96.png" },
        { icon: "mstile-144x144", format: :png },
      ],
      "_favicon_lores.png" => [
        { icon: "favicon.png", size: "16x16" },
        { icon: "favicon.ico", size: "64x64,32x32,24x24,16x16" },
        { icon: "favicon-32x32.png" },
        { icon: "favicon-16x16.png" },
      ]
    }
  end

  # Minify Javascript on build
  #activate :minify_javascript

end
