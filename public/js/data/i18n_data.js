const texts = {
  "en-US": {
    "hero": {
      "lang": "en",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "h1",
              "attributes": {
                "id": "heading-name"
              },
              "content": "Yuri Klar"
            },
            {
              "tag": "h2",
              "attributes": {
                "id": "heading-title",
              },
              "content": "Jobless IT enthusiast"
            },
            {
              "tag": "p",
              "attributes": {
                "id": "hero-text"
              },
              "content": "IT student. Passionate in web development. Aspiring to relocate to Japan"
            },
            {
              "tag": "button",
              "attributes": {
                "class": "btn btn-primary",
                "onclick": "window.location.href='#about'",
              },
              "content": "About"
            }
          ]
        }
      ]
    },
    "about": {
      "lang": "en",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "h1",
              "content": "About me"
            },
            {
              "tag": "p",
              "content": "I'm an IT student who's passionate about software engineering, with a specific focus on web development. I follow programmatic and utilitarian approaches in my learning and practical applications. I am interested in both the research and actual implementation aspects of these processes."
            },
            {
              "tag": "p",
              "content": "Currently, I am engaged in self-study on web development and networking topics, including streaming live coding sessions. Additionally, I have the ambition to relocate to Japan in the future."
            },
            {
              "tag": "h2",
              "content": "Tools"
            },
            {
              "tag": "p",
              "content": "Some common tools I am already familiar with include JavaScript, C#, and C++. In terms of frameworks, I have experience using Next.js for front-end development. On the server side, I am proficient in working with Node.js and express.js, as well as utilizing PostgreSQL for database management."
            },
            {
              "tag": "p",
              "content": "In addition to my programming skills, I also have basic practical experience in configuring and utilizing Linux OS."
            }
          ]
        }
      ]
    },
    "projects": {
      "lang": "en",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "h1",
              "content": "Projects"
            },
            {
              "tag": "ul",
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://github.com/yurimimi/personal_website_v1"
                  },
                  "children": [
                    {
                      "tag": "div",
                      "children": [
                        {
                          "tag": "h3",
                          "content": "personal website v1",
                        },
                        {
                          "tag": "p",
                          "content": "My first personal website with a custom translation script. It looks very simple, but I just wanted to try out the translation feature."
                        }
                      ]
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://github.com/yurimimi/yurimimi.github.io"
                  },
                  "children": [
                    {
                      "tag": "div",
                      "children": [
                        {
                          "tag": "h3",
                          "content": "personal website v2",
                        },
                        {
                          "tag": "p",
                          "content": "The second version of the personal website, includes translation feature. This is the first project where I utilized Figma for designing."
                        }
                      ]
                    }
                  ]
                },
                // can I iterate next element addition somehow?
                // for instance, I want 5 same WIP tiles here.
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
              ]
            },
          ]
        }
      ]
    },
    "socials": {
      "lang": "en",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "div",
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "mailto:juri.klar@outlook.com"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "class": "btn-primary",
                        "id": "email-me",
                        "tabindex": "-1"
                      },
                      "content": "Email me!"
                    }
                  ]
                }
              ]
            },
            {
              "tag": "div",
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://github.com/yurimimi"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "GitHub"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://twitter.com/yuriklar"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "Twitter"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://www.twitch.tv/mimeyu"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "Twitch"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://discord.com/users/1135197622580293692"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "Discord"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  },
  "ja": {
    "hero": {
      "lang": "ja",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "h1",
              "attributes": {
                "id": "heading-name"
              },
              "content": "ユーリ・クラー"
            },
            {
              "tag": "h2",
              "attributes": {
                "id": "heading-title",
              },
              "content": "仕事のないIT愛好家"
            },
            {
              "tag": "p",
              "attributes": {
                "id": "hero-text"
              },
              "content": "IT学生です。ウェブ開発に情熱を持っており、将来的に日本へ移住したいと思っています。"
            },
            {
              "tag": "button",
              "attributes": {
                "class": "btn btn-primary",
                "onclick": "window.location.href='#about'",
              },
              "content": "紹介"
            }
          ]
        }
      ]
    },
    "about": {
      "lang": "ja",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "h1",
              "content": "自己紹介"
            },
            {
              "tag": "p",
              "content": "ウェブ開発に特化したソフトウェアエンジニアリングに情熱を持つIT学生です。学習や実践の際には、プログラム的で有用なアプローチを取っています。これらのプロセスの研究と実際の実装の両方に興味があります。"
            },
            {
              "tag": "p",
              "content": "現在、ストリーミング配信されるライブコーディングセッションを含む、ウェブ開発やネットワーキングに関する自己学習に取り組んでいます。さらに将来的に日本へ移住することを目指しています。"
            },
            {
              "tag": "h2",
              "content": "ツール"
            },
            {
              "tag": "p",
              "content": "私は既にJavaScript、C#、およびC++といった一般的なツールに精通しています。フレームワークに関しては、フロントエンド開発ではNext.jsを使用した経験があります。サーバーサイドでは、Node.jsとexpress.jsの取り扱いに堪能であり、データベース管理ではPostgreSQLを利用することができます。"
            },
            {
              "tag": "p",
              "content": "プログラミングスキルに加えて、Linux OSの設定や利用に関する基本的な実務経験も持っています。"
            }
          ]
        }
      ]
    },
    "projects": {
      "lang": "ja",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "h1",
              "content": "プロジェクト"
            },
            {
              "tag": "ul",
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://github.com/yurimimi/personal_website_v1"
                  },
                  "children": [
                    {
                      "tag": "div",
                      "children": [
                        {
                          "tag": "h3",
                          "content": "personal website v1",
                        },
                        {
                          "tag": "p",
                          "content": "カスタムの翻訳スクリプトを使用した初めての個人ウェブサイトです。非常にシンプルな見た目ですが、翻訳機能を試してみたかっただけです。"
                        }
                      ]
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://github.com/yurimimi/yurimimi.github.io"
                  },
                  "children": [
                    {
                      "tag": "div",
                      "children": [
                        {
                          "tag": "h3",
                          "content": "personal website v2",
                        },
                        {
                          "tag": "p",
                          "content": "個人ウェブサイトの第2バージョンで、翻訳機能が追加されています。デザインにFigmaを活用した初めてのプロジェクトです。"
                        }
                      ]
                    }
                  ]
                },
                // can I iterate next element addition somehow?
                // for instance, I want 4 same WIP tiles here.
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
                {
                  "tag": "div",
                  "attributes": {
                    "class": "tile-wip"
                  },
                  "children": [
                    {
                      "tag": "p",
                      "content": "WIP"
                    }
                  ]
                },
              ]
            },
          ]
        }
      ]
    },
    "socials": {
      "lang": "en",
      "children": [
        {
          "tag": "div",
          "children": [
            {
              "tag": "div",
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "mailto:juri.klar@outlook.com"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "class": "btn-primary",
                        "id": "email-me",
                        "tabindex": "-1"
                      },
                      "content": "メールを送ってください！"
                    }
                  ]
                }
              ]
            },
            {
              "tag": "div",
              "children": [
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://github.com/yurimimi"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "GitHub"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://twitter.com/yuriklar"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "Twitter"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://www.twitch.tv/mimeyu"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "Twitch"
                    }
                  ]
                },
                {
                  "tag": "a",
                  "attributes": {
                    "href": "https://discord.com/users/1135197622580293692"
                  },
                  "children": [
                    {
                      "tag": "button",
                      "attributes": {
                        "tabindex": "-1"
                      },
                      "content": "Discord"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
  }
}
