import 'package:flutter/material.dart';
import 'package:flutter_/widgets/item.dart';

class HomePage extends StatefulWidget {
  HomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: ListView.builder(
          padding: EdgeInsets.all(10),
          itemCount: 5,
          itemBuilder: (context, int index) {
            return Item(
              description: 'Cool description',
              name: 'I am the item',
            );
          },
        ));
  }
}
