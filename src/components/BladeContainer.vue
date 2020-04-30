<template>
    <div class="layout">
        <header class="section">
            <div class="txt">
                <div class="section">Section</div>
            </div>
            <div class="separator"></div>
            <a class="button" @click="addList();">Add</a>
        </header>
        <main>
            <div class="list">
                <div class="header">List 1</div>
                <div class="columns">
                    <div class="main">Item ID</div>
                    <div class="secondary">Status</div>
                    <div class="secondary">Description</div>
                </div>
                <ul>
                    <li>
                        <div class="main">Item 1</div>
                        <div class="secondary">Active</div>
                        <div class="secondary">Item 1 description</div>
                    </li>
                    <li>
                        <div class="main">Item 2</div>
                        <div class="secondary">Suspended</div>
                        <div class="secondary">Second Item description</div>
                    </li>
                    <li>
                        <div class="main">Item 3</div>
                        <div class="secondary">Disabled</div>
                        <div class="secondary">Description for third item</div>
                    </li>
                    <li>
                        <div class="main">Item 4</div>
                        <div class="secondary">Active</div>
                        <div class="secondary">May the 4th item be with you</div>
                    </li>
                    <li>
                        <div class="main">Item 5</div>
                        <div class="secondary">Inactive</div>
                        <div class="secondary">Cinco de mayo</div>
                    </li>
                    <li @click="remList(this)">
                        <div class="main">Remove</div>
                        <div class="secondary">Inactive</div>
                        <div class="secondary">Cinco de mayo</div>
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'BladeContainer',
    props: {

    },
    methods: {
        addList() {
            const l = document.querySelectorAll('main > .list');
            const newNode = l[0].cloneNode(true);
            newNode.querySelector('.header').innerHTML = 'List ' + (l.length + 1)
            document.querySelector('main').appendChild(newNode);
        },
        remList(mi) {
            const l = document.querySelectorAll('main > .list');
            if(l.length > 1) {
                const menu = mi.parentElement.parentElement
                menu.remove()
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
  transition: all 250ms;
}

body {
  padding: 0;
  margin: 0;
}

.layout {
  width: 100vw;
  height: 100vh;
}

header {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);

  .separator {
    flex-grow: 1;
  }

  .button {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    padding: 4px 16px;
    background: #047;
    color: #fff;
  }
}

header.top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #222;
  display: flex;
  align-items: center;
  padding: 5px;
  color: #ccc;
  z-index: 5;
}

header.section {
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  background: #aaa;
  display: flex;
  align-items: center;
  padding: 10px;
  z-index: 4;
  .icon {
    width: 40px;
    height: 40px;
    background: #777;
    margin-right: 10px;
  }
  .txt {
    .section {
      font-size: 0.7em;
      text-transform: uppercase;
      color: #333;
    }
    .object {
      font-size: 1.5em;
    }
  }
}

main {
  display: flex;
  position: absolute;
  top: 100px;
  left: 0;
  bottom: 0;
  right: 0;
  background: #ccc;
  z-index: 3;
}

.list {
  position: relative;
  width: 25px;
  height: 100%;
  background: #eee;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  flex-shrink: 0;
  flex-grow: 0;

  .header {
    position: absolute;
    top: 0;
    left: 4px;
    height: 1.2em;
    overflow: hidden;
    transform-origin: center;
    transform: rotateZ(-90deg) translateX(-50%) translateY(-50%);
    white-space: nowrap;
  }

  .columns {
    opacity: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    height: 0;
    padding: 0 10px;

    .main {
      width: 100%;
    }

    .secondary {
      width: 0;
      overflow: hidden;
      white-space: nowrap;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    opacity: 0;

    li {
      padding: 10px;
      display: flex;
      .main {
        width: 100%;
      }
      .secondary {
        width: 0;
        overflow: hidden;
        white-space: nowrap;
      }
      &:hover {
        background: #ccc;
      }
    }
  }
}

.list:nth-last-child(2),
.list:not(:nth-last-child(1)):not(:nth-last-child(1)):hover {
  width: 200px;
  .header {
    height: 0;
  }
  ul {
    opacity: 1;
  }
}

.list:nth-last-child(1) {
  flex-grow: 1;
  .header {
    height: 0;
  }
  .columns {
    height: 35px;
    opacity: 1;
    background: #eee;

    .secondary {
      width: 25%;
      overflow: hidden;
      white-space: nowrap;
    }
  }
  ul {
    opacity: 1;
    background: #fff;
    li {
      border-bottom: 1px solid #ddd;
      &:hover {
        background: transparent;
      }

      .secondary {
        width: 25%;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }
}

</style>
