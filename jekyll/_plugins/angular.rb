require 'fileutils'
require 'erb'

module Reading
  class Generator < Jekyll::Generator

    def write_routes_template(site, dir)
      routes_template = "
      import { Routes } from '@angular/router';
      <% for @item in site.posts %>
        import { Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>Component } from './Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>/Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>.component';
      <% end %>
      export const blogRoutes: Routes = [
          <% for @item in site.posts %>
            <% @path = @item.title.split(' ').join('_') %>
            {path: 'blog/<%= @path %>', component: Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>Component},
          <% end %>
      ];
      "

      renderer = ERB.new(routes_template)
      File.open("#{dir}/blog.routes.ts", 'w') {|f| f.write(renderer.result(binding())) }
    end

    def write_declarations(site, dir)
      dec_template = "
      <% for @item in site.posts %>
        import { Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>Component } from './Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>/Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>.component';
      <% end %>
      export const blogDecs = [
          <% for @item in site.posts %>
            Post<%= @item.date.year %><%= @item.date.month %><%= @item.date.day %><%= @item.date.hour %><%= @item.date.min %>Component,
          <% end %>
      ];
      "
      renderer = ERB.new(dec_template)
      File.open("#{dir}/blog.decs.ts", 'w') {|f| f.write(renderer.result(binding())) }
    end

    def write_post_components(site, dir)
        for post in site.posts
            name = "Post#{post.date.year}#{post.date.month}#{post.date.day}#{post.date.hour}#{post.date.min}"
            path = "#{dir}/#{name}"
            FileUtils::mkdir_p path
            c = "
            import { Component, OnInit } from '@angular/core';

            @Component({
                selector: 'app-blog-<%= name %>',
                templateUrl: './<%= name %>.component.html',
                styleUrls: ['../../_site/assets/main.css', '../../../src/app/post/post.component.css']
            })
            export class <%= name %>Component implements OnInit {

                constructor() {
                }

                ngOnInit() {
                }

            }
            "
            renderer = ERB.new(c)
            File.open("#{path}/#{name}.component.ts", 'w') {|f| f.write(renderer.result(binding())) }
            p = Jekyll::Page.new(site, site.source, "", post.relative_path)

            p.render(site.layouts, site.site_payload)

            t = "<div class='blog-view'>
                #{p}
            </div>"

            File.open("#{path}/#{name}.component.html", 'w') {|f| f.write(t) }
        end
    end

    def write_blog_component(site, dir)
        bc = '
        <div class="blog-view">
            <div class="title">Posts:</div>
            <% for @item in site.posts %>
                <a routerLink="/blog/<%=@item.title.split(" ").join("_")%>"><%=@item.date.day%>/<%=@item.date.month%>/<%=@item.date.year%> <%=@item.title%></a>
            <% end %>
        </div>
        '
        renderer = ERB.new(bc)
        File.open("#{dir}/blog.component.html", 'w') {|f| f.write(renderer.result(binding())) }
    end

    def generate(site)
      dir = 'gen_blog'
      FileUtils::mkdir_p dir
      write_routes_template(site, dir)
      write_post_components(site, dir)
      write_declarations(site, dir)
      write_blog_component(site, dir)

      for sf in site.pages
        puts sf.path
      end
    end
  end
end
